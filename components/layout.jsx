import { TableOfContents } from '@/components/TableOfContents'

export default function Layout({ children }) {
  return (
    <div className="relative flex min-h-screen">
      {/* Sidebar */}
      <aside className="fixed top-14 z-30 hidden h-[calc(100vh-3.5rem)] w-72 border-r lg:block">
        {/* Sidebar content */}
      </aside>

      {/* Main content */}
      <main className="flex-1 px-4 pt-14 pb-12 lg:pl-72">
        <div className="mx-auto max-w-4xl">
          <div className="flex gap-8">
            {/* Article content */}
            <article className="flex-1 py-6">
              {children}
            </article>

            {/* Table of contents */}
            <div className="hidden xl:block w-64 shrink-0">
              <TableOfContents className="sticky top-14 max-h-[calc(100vh-3.5rem)] overflow-y-auto py-6" />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
} 