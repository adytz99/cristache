import fs from "fs"
import path from "path"
import sharp from "sharp"

const root = path.resolve(import.meta.dirname, "..")
const framePath = process.argv[2]
const outDir = path.join(root, "public", "images", "mockups")

const projects = [
  ["romina-com", "rominafurniture-com-mobile.png"],
  ["credo", "credo-appstore-mobile.png"],
  ["pfpss", "pfpss-ro-mobile.png"],
  ["landauto", "landauto-ro-mobile.png"],
  ["nimfauna", "nimfauna-ro-mobile.png"],
  ["cubestructure", "cube-mobile.png"],
  ["scan2meal", "scan2meal.png"],
  ["pawsight", "pawsight.jpeg"],
  ["romina-eu", "rominafurniture.eu-mobile.png"],
  ["romina-ro", "rominafurniture.ro-mobile.png"],
  ["victory-residence", "victory residence mobile.png"],
  ["gasesti-orice", "gasesti orice mobile.png"],
  ["crm-automation", "mobility mobile.png"],
  ["luxury-residence", "luxury-residence mobile.png"],
  ["shoesup", "shoesup mobile.png"],
  ["prodigital", "prodigital mobile.png"],
]

function magentaAmount(r, g, b) {
  const mag = Math.min(r, b) - g
  if (mag < 28 || g > 130 || r < 50) return 0
  return Math.max(0, Math.min(1, (mag - 28) / 55))
}

function solve(matrix, vector) {
  const n = vector.length
  const a = matrix.map((row, i) => [...row, vector[i]])
  for (let col = 0; col < n; col++) {
    let pivot = col
    for (let row = col + 1; row < n; row++) {
      if (Math.abs(a[row][col]) > Math.abs(a[pivot][col])) pivot = row
    }
    ;[a[col], a[pivot]] = [a[pivot], a[col]]
    const div = a[col][col]
    if (Math.abs(div) < 1e-12) throw new Error("homography singular")
    for (let j = col; j <= n; j++) a[col][j] /= div
    for (let row = 0; row < n; row++) {
      if (row === col) continue
      const factor = a[row][col]
      for (let j = col; j <= n; j++) a[row][j] -= factor * a[col][j]
    }
  }
  return a.map((row) => row[n])
}

function homography(from, to) {
  const rows = []
  const values = []
  for (let i = 0; i < 4; i++) {
    const { x, y } = from[i]
    const { x: u, y: v } = to[i]
    rows.push([x, y, 1, 0, 0, 0, -u * x, -u * y])
    values.push(u)
    rows.push([0, 0, 0, x, y, 1, -v * x, -v * y])
    values.push(v)
  }
  const h = solve(rows, values)
  return (x, y) => {
    const den = h[6] * x + h[7] * y + 1
    return {
      x: (h[0] * x + h[1] * y + h[2]) / den,
      y: (h[3] * x + h[4] * y + h[5]) / den,
    }
  }
}

function sample(data, width, height, x, y) {
  const x0 = Math.max(0, Math.min(width - 1, Math.floor(x)))
  const y0 = Math.max(0, Math.min(height - 1, Math.floor(y)))
  const x1 = Math.min(width - 1, x0 + 1)
  const y1 = Math.min(height - 1, y0 + 1)
  const tx = Math.min(1, Math.max(0, x - x0))
  const ty = Math.min(1, Math.max(0, y - y0))
  const at = (px, py) => {
    const i = (py * width + px) * 4
    return [data[i], data[i + 1], data[i + 2]]
  }
  const a = at(x0, y0)
  const b = at(x1, y0)
  const c = at(x0, y1)
  const d = at(x1, y1)
  return [0, 1, 2].map(
    (k) =>
      a[k] * (1 - tx) * (1 - ty) + b[k] * tx * (1 - ty) + c[k] * (1 - tx) * ty + d[k] * tx * ty,
  )
}

const frame = sharp(framePath).ensureAlpha()
const { width, height } = await frame.metadata()
const frameRaw = await frame.raw().toBuffer()
const mask = new Uint8Array(width * height)
for (let i = 0; i < width * height; i++) {
  const o = i * 4
  const amount = magentaAmount(frameRaw[o], frameRaw[o + 1], frameRaw[o + 2])
  if (amount > 0.45) mask[i] = 1
}

let minSum = Infinity
let maxSum = -Infinity
let minDiff = Infinity
let maxDiff = -Infinity
const corners = Array(4)
let count = 0
for (let y = 0; y < height; y++) {
  for (let x = 0; x < width; x++) {
    if (!mask[y * width + x]) continue
    count++
    const sum = x + y
    const diff = x - y
    if (sum < minSum) {
      minSum = sum
      corners[0] = { x, y }
    }
    if (diff > maxDiff) {
      maxDiff = diff
      corners[1] = { x, y }
    }
    if (sum > maxSum) {
      maxSum = sum
      corners[2] = { x, y }
    }
    if (diff < minDiff) {
      minDiff = diff
      corners[3] = { x, y }
    }
  }
}
if (count < 1000) throw new Error(`magenta screen not found (${count} px)`)
console.log("frame", width, height, "screen px", count)
console.log("corners", corners.map((p) => `${p.x},${p.y}`).join(" | "))

const screenW = (Math.hypot(corners[1].x - corners[0].x, corners[1].y - corners[0].y) +
  Math.hypot(corners[2].x - corners[3].x, corners[2].y - corners[3].y)) / 2
const screenH = (Math.hypot(corners[3].x - corners[0].x, corners[3].y - corners[0].y) +
  Math.hypot(corners[2].x - corners[1].x, corners[2].y - corners[1].y)) / 2

fs.mkdirSync(outDir, { recursive: true })

for (const [id, file] of projects) {
  const input = path.join(root, "public", "images", file)
  const source = file.endsWith(".svg")
    ? Buffer.from(fs.readFileSync(input, "utf8").replace(/\uFFFD/g, " "))
    : input
  const shot = sharp(source, { density: 180 }).ensureAlpha()
  const meta = await shot.metadata()
  const shotRaw = await shot.raw().toBuffer()
  const sw = meta.width
  const sh = meta.height
  const scale = Math.max(screenW / sw, screenH / sh)
  const visibleW = screenW / scale
  const visibleH = screenH / scale
  const sx = (sw - visibleW) / 2
  const sy = 0
  const src = [
    { x: sx, y: sy },
    { x: sx + visibleW, y: sy },
    { x: sx + visibleW, y: sy + visibleH },
    { x: sx, y: sy + visibleH },
  ]
  const map = homography(corners, src)
  const out = Buffer.from(frameRaw)
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const o = (y * width + x) * 4
      const amount = magentaAmount(frameRaw[o], frameRaw[o + 1], frameRaw[o + 2])
      if (amount < 0.22) continue
      const p = map(x, y)
      const [r, g, b] = sample(shotRaw, sw, sh, p.x, p.y)
      out[o] = r
      out[o + 1] = g
      out[o + 2] = b
      out[o + 3] = 255
    }
  }

  const dest = path.join(outDir, `${id}.webp`)
  await sharp(out, { raw: { width, height, channels: 4 } }).webp({ quality: 82 }).toFile(dest)
  console.log(id, fs.statSync(dest).size)
}
