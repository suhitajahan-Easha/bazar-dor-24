
export default function Loading() {
  return (
    <div className="min-h-screen bg-[#F1F6F2] animate-pulse">
      {/* Navbar */}
      <header className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 h-12 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-gray-200" />
            <div className="space-y-1.5">
              <div className="h-3 w-20 rounded bg-gray-200" />
              <div className="h-2 w-28 rounded bg-gray-100" />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-full bg-gray-200" />
            <div className="h-3 w-14 rounded bg-gray-200" />
          </div>
        </div>

        {/* Category navigation */}
        <div className="border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 h-9 flex items-center gap-5 overflow-hidden">
            {Array.from({ length: 7 }).map((_, i) => (
              <div
                key={i}
                className={`h-3 shrink-0 rounded bg-gray-200 ${
                  i === 0 ? "w-12" : "w-14"
                }`}
              />
            ))}
          </div>
        </div>
      </header>

      {/* Price ticker */}
      <div className="h-7 bg-white border-b border-gray-100 overflow-hidden">
        <div className="flex h-full items-center gap-6 px-4">
          {Array.from({ length: 7 }).map((_, i) => (
            <div
              key={i}
              className="h-2.5 w-36 shrink-0 rounded bg-gray-200"
            />
          ))}
        </div>
      </div>

      {/* Main content */}
      <main className="max-w-6xl mx-auto px-4 py-4">
        {/* Category title */}
        <section className="h-14.75 rounded-xl border border-gray-200 bg-white p-4 flex items-center gap-3">
          <div className="h-9 w-9 rounded-lg bg-gray-200" />
          <div className="space-y-2">
            <div className="h-4 w-16 rounded bg-gray-200" />
            <div className="h-2.5 w-40 rounded bg-gray-100" />
          </div>
        </section>

        {/* Filter and sort bar */}
        <section className="mt-4 h-10.5 rounded-xl border border-gray-200 bg-white px-4 flex items-center justify-end gap-3">
          <div className="h-3 w-10 rounded bg-gray-100" />
          <div className="h-7 w-16 rounded-md border border-gray-200 bg-gray-100" />
        </section>

        {/* Results label */}
        <div className="mt-3 mb-3 h-3 w-28 rounded bg-gray-200" />

        {/* Product cards */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
          {Array.from({ length: 4 }).map((_, i) => (
            <article
              key={i}
              className="h-21.75 rounded-xl border border-gray-200 bg-white p-2.5"
            >
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 shrink-0 rounded-lg bg-gray-100" />
                <div className="flex-1 space-y-2">
                  <div className="h-3 w-24 rounded bg-gray-200" />
                  <div className="h-2 w-12 rounded bg-gray-100" />
                </div>
              </div>

              <div className="mt-2.5 flex items-end justify-between">
                <div className="space-y-1.5">
                  <div className="h-2 w-14 rounded bg-gray-100" />
                  <div className="h-3.5 w-16 rounded bg-gray-200" />
                </div>
                <div className="h-4 w-10 rounded-full bg-gray-100" />
              </div>
            </article>
          ))}
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-16 border-t border-gray-200 bg-white">
        <div className="max-w-6xl mx-auto px-4 min-h-11 flex flex-col sm:flex-row items-center justify-between gap-2 py-3">
          <div className="h-2.5 w-44 rounded bg-gray-200" />
          <div className="h-2.5 w-56 max-w-full rounded bg-gray-100" />
        </div>
      </footer>
    </div>
  );
}

