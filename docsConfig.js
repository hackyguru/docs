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
        href: '/',
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
        ],
      },
    ],
  },

  // Footer configuration
  footer: {
    // Credits shown in the footer
    credits: 'Built with Next.js and Shadcn UI',
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
} 