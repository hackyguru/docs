import { getDocBySlug, getAllDocs } from '@/lib/mdx'
import { MDXProvider } from '@/components/mdx-provider'
import { DocsLayout } from '@/components/layouts/docs-layout'

export default function Doc({ doc }) {
  return (
    <DocsLayout>
      <MDXProvider source={doc.source} />
    </DocsLayout>
  )
}

export async function getStaticProps({ params }) {
  try {
    const doc = await getDocBySlug(params.slug.join('/'))
    return {
      props: {
        doc
      }
    }
  } catch (error) {
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
        slug: doc.slug.split('/')
      }
    })),
    fallback: false
  }
} 