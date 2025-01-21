/**
 * @type {import('next').NextConfig}
 */
export const docsConfig = {
  // Site metadata
  site: {
    title: 'Docs',
    description: 'A modern documentation framework built with Next.js and Shadcn UI.',
    favicon: '/favicon.ico',
    logo: {
      light: '/logo.svg',
      dark: '/logo.svg',
      height: 24,
      width: 24,
    },
    // On This Page navigation configuration
    onThisPage: true,
  },

  // Main navigation items
  mainNav: [
    {
      title: 'Documentation',
      href: '/introduction',
    },
    {
      title: 'Components',
      href: '/components/alert',
    },
    {
      title: 'Features',
      href: '/features/mdx',
    },
  ],

  // Theme configuration
  theme: {
    colors: {
      primary: '#0070f3',
      background: '#E8E8EA',
      text: '#292929',
      border: '#FFFFFF',
      dark: {
        background: '#1A1A1A',
        text: '#FFFFFF',
        border: '#333333'
      }
    },
    typography: {
      fontFamily: {
        sans: 'Inter, sans-serif',
        mono: 'JetBrains Mono, monospace',
        heading: 'Cal Sans, sans-serif'
      },
      fontSize: {
        h1: '2.5rem',
        h2: '2rem',
        h3: '1.5rem',
        base: '1rem'
      }
    },
    accentColor: '#0070f3',
    font: {
      sans: 'Inter',
      mono: 'JetBrains Mono',
    },
    radius: '0.5rem',
  },

  // Layout configuration
  layout: {
    maxWidth: '90rem',
    contentWidth: '4xl',
    gap: '1rem',
    padding: '1.5rem'
  },

  // Landing page configuration
  landing: {
    hero: {
      title: 'Documentation Framework For Dummies',
      description: 'Your custom description here',
      buttons: [
        {
          text: 'Get started for free',
          href: '/introduction',
          variant: 'default'
        },
        {
          text: 'GitHub',
          href: 'https://github.com/yourusername/docs',
          variant: 'outline',
          icon: 'github'
        }
      ]
    },
    features: [
      {
        title: 'What is DeDocs',
        description: 'Your custom description',
        image: '/card1.png',
        href: '/introduction'
      },
      {
        title: 'Beautiful UI',
        video: 'https://youtube.com/...',
        href: '/features/ui'
      }
    ]
  },

  // Top navigation configuration
  navigation: {
    header: {
      logo: '/logo.svg',
      height: '4rem',
      sticky: true,
      mobileMenu: true
    },
    sidebar: {
      width: '240px',
      collapsible: true,
      defaultCollapsed: false
    },
    tableOfContents: {
      enabled: true,
      depth: 3,
      scrollspy: true,
      smooth: true
    },
    // Links shown in the top navigation bar
    links: [
      {
        title: 'Documentation',
        href: '/introduction',
      },
      {
        title: 'GitHub',
        href: 'https://github.com/yourusername/docs',
        external: true,
      },
      {
        title: 'Twitter',
        href: 'https://twitter.com/yourusername',
        external: true,
      },
    ],
  },

  // Sidebar configuration
  sidebar: {
    groups: [
      {
        title: 'Getting Started',
        items: [
          {
            title: 'Introduction',
            href: '/introduction',
            icon: 'book'
          },
          {
            title: 'Installation',
            href: '/installation',
            icon: 'rocket'
          },
          {
            title: 'Customization',
            href: '/customization',
            icon: 'palette'
          }
        ]
      },
      {
        title: 'Features',
        items: [
          {
            title: 'MDX Support',
            href: '/features/mdx',
            icon: 'fileText'
          },
          {
            title: 'Components',
            href: '/features/components',
            icon: 'component'
          },
          {
            title: 'Theming',
            href: '/features/theming',
            icon: 'palette'
          }
        ]
      }
    ]
  },

  // Footer configuration
  footer: {
    // Credits shown in the footer
    credits: 'Open Source ♡ @hackyguru',
    // Links shown in the footer
    links: [
      {
        title: 'License',
        href: '/license',
      },
      {
        title: 'Privacy',
        href: '/privacy',
      },
      {
        title: 'Terms',
        href: '/terms',
      },
    ],
    // Social links shown in the footer
    social: [
      {
        title: 'GitHub',
        href: 'https://github.com/yourusername/docs',
        icon: 'github',
      },
      {
        title: 'Twitter',
        href: 'https://twitter.com/yourusername',
        icon: 'twitter',
      },
      {
        title: 'Discord',
        href: 'https://discord.gg/yourinvite',
        icon: 'discord',
      },
    ],
  },

  // Features configuration
  features: {
    search: {
      enabled: true,
      type: 'algolia',
      config: {
        appId: 'YOUR_APP_ID',
        apiKey: 'YOUR_SEARCH_API_KEY',
        indexName: 'YOUR_INDEX_NAME',
      },
    },
    darkMode: true,
    codeBlocks: {
      enabled: true,
      copyButton: true,
      lineNumbers: true,
      highlightLines: true,
      showLanguage: true,
      wrap: false,
    },
    callouts: {
      note: {
        icon: 'info',
        color: 'blue',
      },
      warning: {
        icon: 'alert-triangle',
        color: 'yellow',
      },
      danger: {
        icon: 'alert-octagon',
        color: 'red',
      },
    },
    analytics: {
      provider: 'google',
      googleAnalyticsId: 'G-XXXXXXXXXX',
    },
    feedback: {
      enabled: true,
      collection: 'feedback',
    },
    editLink: {
      enabled: true,
      pattern: 'https://github.com/yourusername/docs/edit/main/content/:path',
    },
    lastUpdated: true,
    pagination: true,
    tableOfContents: {
      depth: 3,
      minHeadings: 4,
    },
    mobileMenu: true,
    scrollToTop: true,
  },

  // Component configuration
  components: {
    card: {
      borderRadius: '0.5rem',
      borderWidth: '4px',
      animation: {
        hover: true,
        duration: '0.3s'
      }
    },
    button: {
      variants: {
        default: {
          bg: 'primary',
          text: 'white',
          hover: { opacity: 0.9 }
        },
        outline: {
          border: '1px solid',
          hover: { bg: 'primary' }
        }
      },
      sizes: {
        sm: { height: '2rem', px: '1rem' },
        lg: { height: '3rem', px: '2rem' }
      }
    }
  },

  // Content configuration
  content: {
    mdx: {
      components: {
        // Add custom MDX components here
      }
    },
    codeBlocks: {
      theme: 'github-dark',
      lineNumbers: true,
      copyButton: true,
      languages: ['js', 'jsx', 'ts', 'tsx', 'bash'],
      highlightStyle: {
        background: '#2E2E2E',
        borderRadius: '0.5rem'
      }
    }
  },

  // Plugin configuration
  plugins: [
    // Add plugins here
  ],
} 