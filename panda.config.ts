import { defineConfig } from '@pandacss/dev';

export default defineConfig({
  preflight: true,
  include: ['./src/**/*.{js,jsx,ts,tsx,astro,svelte,vue}'],
  exclude: [],
  theme: {
    extend: {
      tokens: {
        colors: {
          cosmos: {
            900: { value: '#09090b' }, // Obsidian
            800: { value: '#18181b' },
            700: { value: '#27272a' },
            600: { value: '#3f3f46' },
            300: { value: '#a1a1aa' },
            200: { value: '#e4e4e7' },
          },
          accent: {
            blue: { value: '#00f2fe' }, // Electric Cyan
            purple: { value: '#8b5cf6' }, // Electric Purple
            gold: { value: '#eab308' }, // Vibrant Yellow
            pink: { value: '#d946ef' }, // Fuchsia
          },
          text: {
            main: { value: '#fafafa' },
            muted: { value: '#a1a1aa' },
          },
        },
        fonts: {
          heading: { value: "'Outfit', sans-serif" },
          body: { value: "'DM Sans', sans-serif" },
        },
        shadows: {
          soft: { value: '0 4px 20px -2px rgba(0,0,0,0.5)' },
        },
      },
      recipes: {
        section: {
          className: 'section',
          base: {
            mx: 'auto',
            px: { base: '6', md: '10' },
            py: { base: '8', md: '12' },
            maxW: '8xl',
        },
        },
        heading: {
          className: 'heading',
          base: {
            fontFamily: 'heading',
            fontWeight: 'bold',
            color: 'text.main',
          },
          variants: {
            size: {
              h1: {
                fontSize: '6xl',
                letterSpacing: 'tight',
              },
              h2: {
                fontSize: '4xl',
                letterSpacing: 'tight',
              },
              h3: { fontSize: '2xl' },
            },
          },
          defaultVariants: { size: 'h2' },
        },
        bodyText: {
          className: 'body-text',
          base: {
            fontFamily: 'body',
            color: 'text.muted',
            lineHeight: 'relaxed',
          },
          variants: {
            size: {
              sm: { fontSize: 'sm' },
              md: { fontSize: 'md' },
              base: { fontSize: 'base' },
              lg: { fontSize: 'lg' },
            },
          },
          defaultVariants: { size: 'base' },
        },
        button: {
          className: 'button',
          base: {
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 'md',
            fontWeight: '500',
            transition: 'all 0.2s ease',
            cursor: 'pointer',
            fontFamily: 'body',
            _active: { transform: 'scale(0.98)' },
          },
          variants: {
            variant: {
              primary: {
                bg: 'text.main',
                color: 'cosmos.900',
                _hover: { bg: 'cosmos.200' },
              },
              secondary: {
                bg: 'cosmos.800',
                color: 'text.main',
                border: '1px solid',
                borderColor: 'cosmos.700',
                _hover: { bg: 'cosmos.700' },
              },
              ghost: {
                bg: 'transparent',
                color: 'text.muted',
                _hover: { color: 'text.main' },
              },
            },
            size: {
              sm: { px: '4', py: '2', fontSize: 'sm' },
              md: { px: '5', py: '2.5', fontSize: 'sm' },
              lg: { px: '6', py: '3', fontSize: 'base' },
            },
          },
          defaultVariants: { variant: 'primary', size: 'md' },
        },
        card: {
          className: 'card',
          base: {
            bgColor: 'rgba(24, 24, 27, 0.4)',
            backdropFilter: 'blur(12px)',
            borderRadius: 'lg',
            padding: '6',
            border: '2px solid',
            borderColor: 'rgba(255, 255, 255, 0.05)',
            boxShadow: 'soft',
          },
        },
        badge: {
          className: 'badge',
          base: {
            display: 'inline-flex',
            alignItems: 'center',
            px: '2.5',
            py: '0.5',
            borderRadius: 'full',
            fontSize: 'xs',
            fontWeight: '500',
            letterSpacing: 'wide',
          },
          variants: {
            variant: {
              default: {
                bg: 'cosmos.800',
                color: 'text.muted',
                border: '1px solid',
                borderColor: 'cosmos.700',
              },
              accent: {
                bg: 'rgba(0, 242, 254, 0.1)',
                color: 'accent.blue',
                border: '1px solid',
                borderColor: 'rgba(0, 242, 254, 0.2)',
              },
            },
          },
          defaultVariants: { variant: 'default' },
        },
        pageDivider: {
          className: 'page-divider',
          base: { h: '1px', w: '100%', bg: 'cosmos.800', my: '8' },
        },
      },
    },
  },
  outdir: 'styled-system',
});
