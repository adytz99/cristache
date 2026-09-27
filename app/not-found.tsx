export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black p-8 text-center">
      <h1 className="mb-4 text-4xl text-ivory">404: Pagina nu a fost găsită</h1>
      <p className="mb-8 text-ivory/55">Adresa introdusă nu există.</p>
      <a href="/" className="btn-primary">
        Înapoi la prima pagină
      </a>
    </main>
  )
}
