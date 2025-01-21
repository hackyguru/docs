import { getDocBySlug, getAllDocs } from '../lib/mdx'
import { MDXProvider } from '../components/mdx-provider'
import { DocsLayout } from '../components/layouts/docs-layout'
import { components } from '../components/mdx-components'
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { Share2 } from 'lucide-react'
import { useState } from 'react'
import { cn } from '@/lib/utils'

export default function Doc({ doc }) {
  const [copied, setCopied] = useState(false)
  const isComponentPage = doc.slug?.startsWith('components/') || doc.frontmatter?.type === 'component'

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <DocsLayout>
      <div className={cn("pt-8", isComponentPage && "pb-16")}>
        <Card className={cn(
          "overflow-hidden border-none bg-gradient-to-b from-primary/5 via-background to-background p-8 shadow-md dark:from-primary/10 dark:via-background dark:to-background",
          isComponentPage ? "mb-8" : "mb-16"
        )}>
          <CardHeader className="relative space-y-2 p-0">
            <div className="absolute -right-2 -top-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={handleShare}
                className="h-8 w-8 rounded-full hover:bg-primary/10"
              >
                <Share2 className="h-4 w-4" />
                <span className="sr-only">Share</span>
              </Button>
            </div>
            <CardTitle className="text-4xl font-bold tracking-tight">
              {doc.frontmatter.title}
            </CardTitle>
            {copied && (
              <div className="absolute -right-2 top-8 animate-in fade-in slide-in-from-top-1 rounded-md bg-primary px-3 py-1 text-xs text-primary-foreground">
                URL copied!
              </div>
            )}
          </CardHeader>
          <CardContent className="mt-4 p-0">
            <CardDescription className="text-lg leading-relaxed text-muted-foreground">
              {doc.frontmatter.description}
            </CardDescription>
          </CardContent>
        </Card>
        <div className={cn(
          "space-y-8",
          isComponentPage && "grid grid-cols-1 gap-8 space-y-0 lg:grid-cols-[1fr_400px]"
        )}>
          <MDXProvider
            source={doc.source}
            components={{
              ...components,
              // Override specific components for component pages
              h2: (props) => components.h2({
                ...props,
                className: cn(
                  props.className,
                  isComponentPage && "mt-8 lg:mt-0"
                )
              }),
              pre: (props) => components.pre({
                ...props,
                className: cn(
                  props.className,
                  isComponentPage && "lg:mt-0"
                )
              })
            }}
          />
        </div>
      </div>
    </DocsLayout>
  )
}

export async function getStaticProps({ params }) {
  try {
    const slug = params.slug.join('/')
    const doc = await getDocBySlug(slug)
    
    // Ensure all properties are serializable
    const serializedDoc = {
      source: {
        ...doc.source,
        scope: doc.source?.scope ? Object.fromEntries(
          Object.entries(doc.source.scope).map(([key, value]) => [
            key,
            value === undefined ? null : value
          ])
        ) : {}
      },
      frontmatter: {
        title: doc.frontmatter?.title || null,
        description: doc.frontmatter?.description || null
      },
      slug: slug || null
    }

    if (!serializedDoc.source || !serializedDoc.slug) {
      return {
        notFound: true
      }
    }

    return {
      props: {
        doc: serializedDoc
      }
    }
  } catch (error) {
    console.error('Error loading doc:', error)
    return {
      notFound: true
    }
  }
}

export async function getStaticPaths() {
  const docs = await getAllDocs()
  
  return {
    paths: docs.map((doc) => ({
      params: {
        slug: doc.slug ? doc.slug.split('/') : []
      }
    })),
    fallback: false
  }
} 