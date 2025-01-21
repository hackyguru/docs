"use client"

import { usePathname } from 'next/navigation'
import { docsConfig } from '../../docsConfig'
import { DocsSidebar } from '../docs/sidebar'
import { DocsHeader } from '../docs/header'
import { ScrollArea } from '../ui/scroll-area'
import { Breadcrumbs } from '../ui/breadcrumbs'
import { getBreadcrumbs } from '../../lib/breadcrumbs'
import { Separator } from '../ui/separator'
import { Footer } from '../footer'
import { TableOfContents } from '../TableOfContents'

export function DocsLayout({ children }) {
  const pathname = usePathname()
  const isRoot = pathname === '/'
  const breadcrumbs = isRoot ? [] : getBreadcrumbs(pathname)
  const showTableOfContents = !isRoot && docsConfig.site?.onThisPage !== false

  return (
    <div className="flex min-h-screen flex-col">
      <DocsHeader />
      <div className="flex-1">
        <div className="flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] lg:grid-cols-[240px_minmax(0,1fr)] xl:grid-cols-[240px_minmax(0,1fr)_260px]">
          <aside className="fixed top-14 z-30 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 overflow-y-auto border-r md:sticky md:block">
            <ScrollArea className="h-full py-6 px-4">
              <DocsSidebar items={docsConfig.sidebar?.groups || []} />
            </ScrollArea>
          </aside>
          <main className="relative overflow-hidden px-4 py-6 md:px-6 lg:py-8">
            <div className="mx-auto w-full">
              {!isRoot && (
                <div className="flex flex-col gap-4">
                  <Breadcrumbs segments={breadcrumbs} />
                  <Separator />
                </div>
              )}
              <div className="overflow-x-auto">{children}</div>
            </div>
          </main>
          {showTableOfContents && (
            <aside className="hidden text-sm xl:block">
              <div className="fixed w-[240px] top-[3.5rem] bottom-0 overflow-y-auto">
                <div className="px-6 py-4">
                  <TableOfContents />
                </div>
              </div>
            </aside>
          )}
        </div>
      </div>
      <Footer />
    </div>
  )
} 