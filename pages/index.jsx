import { docsConfig } from '../docsConfig'
import { Button } from '../components/ui/button'
import { Icons } from '../components/icons'
import Link from 'next/link'
import { Card } from '../components/ui/card'
import Image from 'next/image'
import { LandingLayout } from '../components/layouts/landing-layout'

export default function LandingPage() {
  const { landing } = docsConfig

  return (
    <div className="container mx-auto max-w-[1200px] px-6">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-16">
        <div className="flex flex-col items-center gap-4 text-center">
          <h1 className="font-heading text-[#292929] dark:text-white text-3xl font-bold sm:text-5xl md:text-6xl lg:text-4xl">
            Documentation Framework For Dummies
          </h1>
          <div className="flex gap-4 mt-4">
            <Link href="/introduction">
              <Button size="lg" className="h-12 px-8 text-white dark:text-black">
                Get started for free
              </Button>
            </Link>
            <Link href="https://github.com/yourusername/docs">
              <Button variant="outline" size="lg" className="h-12 px-8 text-[#292929] dark:text-white hover:text-[#292929] dark:hover:text-white">
                <Icons.github className="mr-2 h-5 w-5" />
                GitHub
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="pb-8">
        <div className="grid gap-4 grid-cols-1 md:grid-cols-4 lg:grid-cols-6 auto-rows-[240px]">
          {/* Card 1 - Image */}
          <Card className="relative overflow-hidden border-4 border-white dark:border-neutral-800 bg-[#eaeaea] dark:bg-neutral-900 group md:col-span-2 lg:col-span-2">
            <div className="relative w-full h-full">
              <Image
                src="/card1.png"
                alt="Documentation Example"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <div className="bg-white dark:bg-neutral-800 rounded-full py-2 px-4">
                  <p className="text-sm font-medium text-[#292929] dark:text-white">What is DeDocs</p>
                </div>
                <Button size="icon" variant="outline" className="rounded-full bg-white dark:bg-neutral-800 h-8 w-8 text-[#292929] dark:text-white">
                  <Icons.arrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </Card>


          {/* Card 2 - Video Card */}
          <Card className="relative overflow-hidden border-4 border-white dark:border-neutral-800 bg-[#eaeaea] dark:bg-neutral-900 group md:col-span-2 lg:col-span-4 md:row-span-2">
            <div className="relative w-full h-full">
              <iframe
                src="https://www.youtube.com/embed/BFX-VhbIbdo?si=6eT-1WIphp2bgur-&autoplay=0&rel=0"
                className="absolute top-0 left-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Documentation Framework Demo"
                loading="lazy"
              />
            </div>
          </Card>

                    {/* Card 1 - Image */}
                    <Card className="relative overflow-hidden border-4 border-white dark:border-neutral-800 bg-[#eaeaea] dark:bg-neutral-900 group md:col-span-2 lg:col-span-2">
            <div className="relative w-full h-full">
              <Image
                src="/g1.jpg"
                alt="Documentation Example"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <div className="bg-white dark:bg-neutral-800 rounded-full py-2 px-4">
                  <p className="text-sm font-medium text-[#292929] dark:text-white">Write documentation using MDX</p>
                </div>
                <Button size="icon" variant="outline" className="rounded-full bg-white dark:bg-neutral-800 h-8 w-8 text-[#292929] dark:text-white">
                  <Icons.arrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </Card>
                    {/* Card 1 - Image */}
                    <Card className="relative overflow-hidden border-4 border-white dark:border-neutral-800 bg-[#eaeaea] dark:bg-neutral-900 group md:col-span-2 lg:col-span-2">
            <div className="relative w-full h-full">
              <Image
                src="/g1.jpg"
                alt="Documentation Example"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <div className="bg-white dark:bg-neutral-800 rounded-full py-2 px-4">
                  <p className="text-sm font-medium text-[#292929] dark:text-white">Write documentation using MDX</p>
                </div>
                <Button size="icon" variant="outline" className="rounded-full bg-white dark:bg-neutral-800 h-8 w-8 text-[#292929] dark:text-white">
                  <Icons.arrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </Card>
                    {/* Card 1 - Image */}
                    <Card className="relative overflow-hidden border-4 border-white dark:border-neutral-800 bg-[#eaeaea] dark:bg-neutral-900 group md:col-span-2 lg:col-span-2">
            <div className="relative w-full h-full">
              <Image
                src="/g1.jpg"
                alt="Documentation Example"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <div className="bg-white dark:bg-neutral-800 rounded-full py-2 px-4">
                  <p className="text-sm font-medium text-[#292929] dark:text-white">Write documentation using MDX</p>
                </div>
                <Button size="icon" variant="outline" className="rounded-full bg-white dark:bg-neutral-800 h-8 w-8 text-[#292929] dark:text-white">
                  <Icons.arrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </Card>

          {/* Card 3 - Image */}
          <Card className="relative overflow-hidden border-4 border-white dark:border-neutral-800 bg-[#eaeaea] dark:bg-neutral-900 group md:col-span-2 lg:col-span-2">
            <div className="relative w-full h-full">
              <Image
                src="/g2.jpg"
                alt="Search Feature"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <div className="bg-white dark:bg-neutral-800 rounded-full py-2 px-4">
                  <p className="text-sm font-medium text-[#292929] dark:text-white">Full-text search functionality</p>
                </div>
                <Button size="icon" variant="outline" className="rounded-full bg-white dark:bg-neutral-800 h-8 w-8 text-[#292929] dark:text-white">
                  <Icons.arrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  )
}

LandingPage.getLayout = function getLayout(page) {
  return <LandingLayout>{page}</LandingLayout>
} 