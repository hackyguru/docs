import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center text-center">
      <h1 className="text-4xl font-bold tracking-tighter">404 - Page Not Found</h1>
      <p className="mt-4 text-lg text-muted-foreground">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Button asChild className="mt-8">
        <Link href="/docs/introduction">
          Return to Documentation
        </Link>
      </Button>
    </div>
  )
} 