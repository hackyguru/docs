import Link from "next/link"
import { docsConfig } from "@/config/docs"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"

export function Footer({ className }) {
  return (
    <footer className={cn("border-t", className)}>
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            {docsConfig.footer.credits.text}{" "}
            <a
              href={docsConfig.footer.credits.link.href}
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              {docsConfig.footer.credits.link.text}
            </a>
          </p>
        </div>
        <div className="flex gap-4">
          {docsConfig.footer.links.map((link) => {
            const Icon = Icons[link.icon]
            return (
              <Link
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground hover:text-foreground"
              >
                <Icon className="h-4 w-4" />
                <span className="sr-only">{link.text}</span>
              </Link>
            )
          })}
        </div>
      </div>
    </footer>
  )
} 