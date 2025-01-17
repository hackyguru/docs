import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

export function TableOfContents({ className }) {
  const [headings, setHeadings] = useState([])
  const [activeId, setActiveId] = useState('')

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll('h2, h3'))
      .map((element) => ({
        id: element.id,
        text: element.textContent,
        level: Number(element.tagName.charAt(1))
      }))
    setHeadings(elements)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: '-20% 0% -60% 0%' }
    )

    elements.forEach(({ id }) => {
      const element = document.getElementById(id)
      if (element) {
        observer.observe(element)
      }
    })

    return () => {
      elements.forEach(({ id }) => {
        const element = document.getElementById(id)
        if (element) {
          observer.unobserve(element)
        }
      })
    }
  }, [])

  if (headings.length === 0) {
    return null
  }

  return (
    <div className={className}>
      <div className="sticky top-16">
        <h4 className="mb-4 text-sm font-medium text-foreground">On This Page</h4>
        <ul className="space-y-3 text-sm">
          {headings.map(({ id, text, level }) => (
            <li
              key={id}
              className={cn(
                'line-clamp-1',
                level === 3 && 'ml-4',
                activeId === id
                  ? 'text-foreground'
                  : 'text-muted-foreground'
              )}
            >
              <a
                href={`#${id}`}
                className={cn(
                  'inline-block hover:text-foreground transition-colors',
                  activeId === id && 'font-medium'
                )}
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById(id)?.scrollIntoView({
                    behavior: 'smooth'
                  })
                }}
              >
                {text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
} 