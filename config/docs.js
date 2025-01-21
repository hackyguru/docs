export const docsConfig = {
  // Basic site configuration
  title: 'Your Documentation',
  description: 'Documentation for your project',
  
  // Meta configuration
  meta: {
    title: {
      default: 'Your Documentation',
      template: '%s - Your Documentation'
    },
    description: 'Documentation for your project',
    keywords: ['documentation', 'nextjs', 'react'],
    authors: [
      {
        name: 'Your Name',
        url: 'https://yourwebsite.com'
      }
    ],
    creator: 'Your Name',
    themeColor: [
      { media: '(prefers-color-scheme: light)', color: 'white' },
      { media: '(prefers-color-scheme: dark)', color: 'black' }
    ],
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: 'https://yourdocs.com',
      title: 'Your Documentation',
      description: 'Documentation for your project',
      siteName: 'Your Documentation'
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Your Documentation',
      description: 'Documentation for your project',
      creator: '@yourusername'
    },
    icons: {
      icon: '/favicon.ico',
      shortcut: '/favicon-16x16.png',
      apple: '/apple-touch-icon.png'
    }
  },

  // Header configuration
  header: {
    logo: {
      text: 'Your Documentation',
      link: '/',
      image: '/logo.png'
    },
    nav: [
      {
        title: 'Documentation',
        href: '/docs'
      },
      {
        title: 'GitHub',
        href: 'https://github.com/yourusername/yourproject',
        external: true
      }
    ]
  },

  // Sidebar configuration
  sidebar: {
    defaultOpenLevel: 1,
    collapsible: true,
    items: [
      {
        title: 'Getting Started',
        items: [
          {
            title: 'Introduction',
            href: '/docs/introduction'
          },
          {
            title: 'Installation',
            href: '/docs/installation'
          }
        ]
      },
      {
        title: 'Configuration',
        items: [
          {
            title: 'Configuration',
            href: '/docs/configuration'
          },
          {
            title: 'SEO',
            href: '/docs/seo'
          },
          {
            title: 'Footer',
            href: '/docs/footer'
          }
        ]
      },
      {
        title: 'Features',
        items: [
          {
            title: 'Code Blocks',
            href: '/docs/code-blocks'
          },
          {
            title: 'Components',
            href: '/docs/components'
          }
        ]
      }
    ]
  },

  // Search configuration
  search: {
    enabled: true,
    placeholder: 'Search documentation...',
    indexing: {
      includeContent: true,
      includePath: true,
      includeTitle: true,
      includeDescription: true
    }
  },

  // Theme configuration
  theme: {
    defaultTheme: 'system', // 'light' | 'dark' | 'system'
    accentColor: {
      light: 'blue',
      dark: 'blue'
    },
    codeTheme: {
      light: 'github-light',
      dark: 'github-dark'
    },
    font: {
      sans: 'Inter',
      mono: 'JetBrains Mono'
    }
  },

  // Footer configuration
  footer: {
    branding: {
      logo: "/logo.svg",
      logoAlt: "Documentation Logo",
      description: "Building better documentation for everyone. Simple, modular and accessible documentation components."
    },
    columns: [
      {
        title: "Product",
        links: [
          {
            text: "Documentation",
            href: "/docs",
          },
          {
            text: "Guides",
            href: "/guides",
          },
          {
            text: "API Reference",
            href: "/api",
          }
        ]
      },
      {
        title: "Company",
        links: [
          {
            text: "About Us",
            href: "/about",
          },
          {
            text: "Blog",
            href: "/blog",
          },
          {
            text: "Careers",
            href: "/careers",
          }
        ]
      },
      {
        title: "Resources",
        links: [
          {
            text: "Community",
            href: "/community",
          },
          {
            text: "Contact",
            href: "/contact",
          },
          {
            text: "Privacy",
            href: "/privacy",
            external: true
          }
        ]
      }
    ],
    credits: {
      text: "Built by",
      link: {
        text: "Your Name",
        href: "https://yourwebsite.com"
      }
    },
    links: [
      {
        text: "GitHub",
        href: "https://github.com/yourusername",
        icon: "github"
      },
      {
        text: "Twitter",
        href: "https://twitter.com/yourusername",
        icon: "twitter"
      },
      {
        text: "Discord",
        href: "https://discord.gg/yourinvite",
        icon: "discord"
      }
    ]
  },

  // Features configuration
  features: {
    mdxComponents: true, // Enable custom MDX components
    codeBlocks: {
      enabled: true,
      copyButton: true,
      lineNumbers: true,
      lineHighlighting: true,
      wordHighlighting: true,
      showLanguage: true
    },
    darkMode: true,
    search: true,
    tableOfContents: {
      enabled: true,
      depth: 3,
      scrollspy: true
    },
    pagination: true,
    editLink: {
      enabled: true,
      text: 'Edit this page on GitHub',
      pattern: 'https://github.com/yourusername/yourproject/edit/main/content/:path'
    },
    feedback: {
      enabled: true,
      labels: {
        helpful: 'Was this page helpful?',
        yes: 'Yes',
        no: 'No'
      }
    },
    lastUpdated: true,
    readingTime: true,
    progressBar: true
  }
} 