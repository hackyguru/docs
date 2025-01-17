import { useMDXComponent } from "next-contentlayer/hooks"
import { components } from "./mdx-components"

export function Mdx({ code }) {
  const Component = useMDXComponent(code)

  return (
    <div className="mdx">
      <Component components={components} />
    </div>
  )
} 