'use client'

import { MDXRemote } from 'next-mdx-remote'
import { components } from '@/components/mdx-components'
import { initializeCopyButtons } from './copy-button'

export function MDXProvider({ source }) {
  // Initialize copy buttons
  initializeCopyButtons()

  return (
    <div className="mdx">
      <MDXRemote {...source} components={components} />
    </div>
  )
} 