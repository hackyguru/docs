"use client"

import { usePathname } from 'next/navigation'
import { docsConfig } from '@/docsConfig'
import { DocsSidebar } from '@/components/docs/sidebar'
import { DocsHeader } from '@/components/docs/header'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Breadcrumbs } from '@/components/ui/breadcrumbs'
import { getBreadcrumbs } from '@/lib/breadcrumbs'
import { Separator } from '@/components/ui/separator'

export function DocsLayout({ children }) {
  const pathname = usePathname()
  const breadcrumbs = getBreadcrumbs(pathname)

  return (
    <div className="flex min-h-screen flex-col">
      <DocsHeader />
      <div className="flex-1">
        <div className="flex-1 items-start md:grid md:grid-cols-[240px_1fr] lg:grid-cols-[280px_1fr]">
          <aside className="fixed top-14 z-30 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 overflow-y-auto border-r md:sticky md:block">
            <ScrollArea className="h-full py-6">
              <DocsSidebar items={docsConfig.sidebar?.groups || []} />
            </ScrollArea>
          </aside>
          <main className="relative px-4 py-6 lg:px-8 lg:py-8">
            <div className="mx-auto w-full min-w-0">
              <Breadcrumbs segments={breadcrumbs} className="mb-4" />
              <Separator className="mb-6" />
              {children}
            </div>
          </main>
        </div>
      </div>
    </div>
  )
} 