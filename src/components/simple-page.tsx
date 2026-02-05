export function SimplePage({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <main id="main-content" className="mx-auto max-w-[1000px] px-4 py-12">
      <h1 className="text-4xl font-bold">{title}</h1>
      <div className="prose mt-6 max-w-none text-pharma-light">{children}</div>
    </main>
  );
}
