import { docsConfig } from '../docsConfig'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Icons } from '../components/icons'
import Link from 'next/link'
import Image from 'next/image'
import { DocsLayout } from '../components/layouts/docs-layout'

export default function LandingPage() {
  if (!docsConfig.landing) {
    return null
  }

  const { landing } = docsConfig

  return (
    <div className="flex-1">
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
          <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
            {landing.title}
          </h1>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            {landing.description}
          </p>
        </div>
      </section>

      <section className="container space-y-6 py-8 md:py-12 lg:py-24">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          {landing.media.type === "video" ? (
            <div className="aspect-video w-full overflow-hidden rounded-lg border bg-muted">
              <iframe
                src={landing.media.url}
                className="h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          ) : (
            <div className="aspect-video w-full overflow-hidden rounded-lg border bg-muted">
              <Image
                src={landing.media.url}
                alt="Documentation preview"
                width={1920}
                height={1080}
                className="object-cover"
                priority
              />
            </div>
          )}
        </div>
      </section>

      <section className="container py-8 md:py-12 lg:py-24">
        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
          {landing.cta.map((item, index) => {
            const Icon = Icons[item.icon]
            return (
              <Link key={index} href={item.href} legacyBehavior>
                <a className="block">
                  <Card className="h-full cursor-pointer transition-colors hover:bg-muted/50">
                    <CardHeader>
                      <div className="flex items-center gap-4">
                        {Icon && <Icon className="h-8 w-8" />}
                        <CardTitle>{item.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>{item.description}</CardDescription>
                    </CardContent>
                  </Card>
                </a>
              </Link>
            )
          })}
        </div>
      </section>
    </div>
  )
}

LandingPage.getLayout = function getLayout(page) {
  return <DocsLayout>{page}</DocsLayout>
} 