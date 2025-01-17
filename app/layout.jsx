import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { Footer } from '@/components/footer'
import { SEO } from '@/components/seo'
import '@/styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <SEO />
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <div className="flex-1">{children}</div>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
} 