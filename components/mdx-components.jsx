import React, { useRef } from 'react'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { cn } from "@/lib/utils"

export const components = {
  h1: ({ className, ...props }) => (
    <h1
      className={cn('mt-2 scroll-m-20 text-4xl font-bold tracking-tight', className)}
      {...props}
    />
  ),
  h2: ({ className, ...props }) => (
    <h2
      className={cn('mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0', className)}
      {...props}
    />
  ),
  h3: ({ className, ...props }) => (
    <h3
      className={cn('mt-8 scroll-m-20 text-2xl font-semibold tracking-tight', className)}
      {...props}
    />
  ),
  h4: ({ className, ...props }) => (
    <h4
      className={cn('mt-8 scroll-m-20 text-xl font-semibold tracking-tight', className)}
      {...props}
    />
  ),
  p: ({ className, ...props }) => (
    <p
      className={cn('leading-7 [&:not(:first-child)]:mt-6', className)}
      {...props}
    />
  ),
  ul: ({ className, ...props }) => (
    <ul
      className={cn('my-6 ml-6 list-disc [&>li]:mt-2', className)}
      {...props}
    />
  ),
  ol: ({ className, ...props }) => (
    <ol
      className={cn('my-6 ml-6 list-decimal [&>li]:mt-2', className)}
      {...props}
    />
  ),
  li: ({ className, ...props }) => (
    <li
      className={cn('mt-2', className)}
      {...props}
    />
  ),
  blockquote: ({ className, ...props }) => (
    <blockquote
      className={cn('mt-6 border-l-2 pl-6 italic [&>*]:text-muted-foreground', className)}
      {...props}
    />
  ),
  hr: ({ ...props }) => (
    <hr className="my-4 md:my-8" {...props} />
  ),
  a: ({ className, ...props }) => (
    <a
      className={cn("font-medium underline underline-offset-4 hover:text-primary", className)}
      {...props}
    />
  ),
  table: ({ className, ...props }) => (
    <div className="my-6 w-full overflow-y-auto">
      <table className={cn('w-full', className)} {...props} />
    </div>
  ),
  tr: ({ className, ...props }) => (
    <tr
      className={cn('m-0 border-t p-0 even:bg-muted', className)}
      {...props}
    />
  ),
  th: ({ className, ...props }) => (
    <th
      className={cn('border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right', className)}
      {...props}
    />
  ),
  td: ({ className, ...props }) => (
    <td
      className={cn('border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right', className)}
      {...props}
    />
  ),
  pre: ({ className, ...props }) => {
    const preRef = useRef(null);
    
    return (
      <div className="relative my-6 group">
        <button
          onClick={() => {
            if (preRef.current) {
              const text = preRef.current.textContent || '';
              navigator.clipboard.writeText(text);
              const button = document.activeElement;
              button.textContent = 'Copied!';
              setTimeout(() => {
                button.textContent = 'Copy';
              }, 2000);
            }
          }}
          className="opacity-0 group-hover:opacity-100 absolute right-4 top-4 z-50 px-3 py-1.5 font-medium text-xs bg-zinc-700 text-zinc-100 rounded-md hover:bg-zinc-600 transition-all duration-150"
        >
          Copy
        </button>
        <pre
          ref={preRef}
          className={cn(
            "overflow-x-auto rounded-lg border border-zinc-800 bg-zinc-950 p-4 font-mono",
            className
          )}
          {...props}
        />
      </div>
    );
  },
  code: ({ className, ...props }) => {
    const hasNewline = props.children?.toString().includes('\n');
    const codeString = props.children?.toString() || '';
    
    // Handle inline code differently
    const isInlineCode = !hasNewline && !className?.includes('language-');
    
    if (isInlineCode) {
      return (
        <code
          className={cn(
            "relative rounded bg-zinc-950 px-[0.3rem] py-[0.2rem] font-mono text-sm text-zinc-100",
            className
          )}
          {...props}
        />
      );
    }

    // All other code blocks get uniform styling
    return (
      <code 
        className={cn(
          "relative grid min-w-full break-words rounded-none bg-transparent p-0 text-sm text-zinc-100",
          className
        )} 
        {...props} 
      />
    );
  },
  Alert,
  AlertTitle,
  AlertDescription,
  Button,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} 