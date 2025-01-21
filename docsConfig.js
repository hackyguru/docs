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

  // Landing page configuration
  landing: {
    title: "Build beautiful documentation sites with ease",
    description: "A modern documentation framework built with Next.js and Shadcn UI. Fast, accessible, and beautiful by default.",
    media: {
      type: "video", // or "image"
      url: "https://www.youtube.com/embed/your-video-id", // or "/path/to/your/image.jpg"
      aspectRatio: "16/9",
    },
    cta: [
      {
        title: "Get Started",
        description: "Learn how to install and set up your documentation site.",
        href: "/introduction",
        icon: "rocket", // You can use any icon name from your icon set
      },
      {
        title: "Components",
        description: "Explore our beautiful, accessible components.",
        href: "/features/components",
        icon: "component",
      },
      {
        title: "Guides",
        description: "Follow our guides to customize your documentation.",
        href: "/guides/adding-pages",
        icon: "book",
      },
    ],
  },

  // Theme configuration
  theme: {
    accentColor: '#0070f3',
    font: {
      sans: 'Inter',
      mono: 'JetBrains Mono',
    },
    radius: '0.5rem',
  },

  // Top navigation configuration
  navigation: {
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
    // Groups of links shown in the sidebar
    groups: [
      {
        title: 'Getting Started',
        items: [
          {
            title: 'Introduction',
            href: '/introduction',
            isDefault: false,
          },
          {
            title: 'Installation',
            href: '/installation',
          },
          {
            title: 'Configuration',
            href: '/configuration',
          },
        ],
      },
      {
        title: 'Features',
        items: [
          {
            title: 'MDX Support',
            href: '/features/mdx',
          },
          {
            title: 'Components',
            href: '/features/components',
          },
          {
            title: 'Theming',
            href: '/features/theming',
          },
          {
            title: 'Navigation',
            href: '/features/navigation',
          },
          {
            title: 'Search',
            href: '/features/search',
          },
          {
            title: 'Code Blocks',
            href: '/features/code-blocks',
          },
          {
            title: 'Callouts',
            href: '/features/callouts',
          },
          {
            title: 'SEO',
            href: '/features/seo',
          },
        ],
      },
      {
        title: 'Components',
        items: [
          {
            title: 'Alert',
            href: '/components/alert',
          },
          {
            title: 'Button',
            href: '/components/button',
          },
          {
            title: 'Card',
            href: '/components/card',
          },
          {
            title: 'Tabs',
            href: '/components/tabs',
          },
          {
            title: 'Callout',
            href: '/components/callout',
          },
          {
            title: 'Code',
            href: '/components/code',
          },
        ],
      },
      {
        title: 'Guides',
        items: [
          {
            title: 'Adding Pages',
            href: '/guides/adding-pages',
          },
          {
            title: 'Custom Components',
            href: '/guides/custom-components',
          },
          {
            title: 'Styling',
            href: '/guides/styling',
          },
          {
            title: 'Deployment',
            href: '/guides/deployment',
          },
          {
            title: 'Analytics',
            href: '/guides/analytics',
          },
          {
            title: 'SEO',
            href: '/guides/seo',
          },
        ],
      },
    ],
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
} 