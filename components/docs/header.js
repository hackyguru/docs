import { useState } from 'react'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { Menu, Moon, Sun } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { ScrollArea } from '@/components/ui/scroll-area'
import { DocsSidebar } from './sidebar'
import { docsConfig } from '@/docsConfig'

export function DocsHeader() {
  const { setTheme, theme } = useTheme()
  const [open, setOpen] = useState(false)

  const logo = docsConfig.site?.logo
  const title = docsConfig.site?.title || 'Documentation'

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-14 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-6">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="pl-1 pr-0">
              <div className="px-4">
                <Link
                  href="/"
                  className="flex items-center space-x-2"
                  onClick={() => setOpen(false)}
                >
                  {logo && (
                    <img 
                      src={theme === 'dark' ? logo.dark : logo.light} 
                      alt={title}
                      className="h-6 w-6" 
                      width={logo.width || 24}
                      height={logo.height || 24}
                    />
                  )}
                  <span className="font-bold">{title}</span>
                </Link>
              </div>
              <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10">
                <DocsSidebar items={docsConfig.sidebar?.groups || []} />
              </ScrollArea>
            </SheetContent>
          </Sheet>

          <Link href="/" className="flex items-center space-x-2">
            {logo && (
              <img 
                src={theme === 'dark' ? logo.dark : logo.light} 
                alt={title}
                className="h-6 w-6" 
                width={logo.width || 24}
                height={logo.height || 24}
              />
            )}
            <span className="hidden font-bold sm:inline-block">
              {title}
            </span>
          </Link>

          <nav className="hidden md:flex">
            <div className="flex items-center gap-6">
              {docsConfig.navigation?.links?.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                  {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle theme"
            className="rounded-full"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            <Sun className="h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>
      </div>
    </header>
  )
} 