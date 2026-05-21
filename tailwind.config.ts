import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef0ff',
          100: '#d8ddfc',
          200: '#b1bbf9',
          300: '#8DA2EB',
          400: '#53569C',
          500: '#3d44cd',
          800: '#1F2267',
          900: '#11143F',
        },
        accent: {
          green: '#4AE124',
          red: '#FF6767',
          yellow: '#F7DC6F',
        },
      },
      fontFamily: {
        inter: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #3d44cd 0%, #1F2267 100%)',
      },
    },
  },
  plugins: [typography],
}

export default config
