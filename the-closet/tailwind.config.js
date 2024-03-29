/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,vue,ts}"],
  darkMode: 'class',
  corePlugins: {
    preflight: false
  },
  theme: {
    container: {
      center: true
    },
    extend: {
      fontSize: {
        '13': ['13px', '16px']
      },
      colors: {
        // 'royal-purple': {
        //   '50': '#faf6fe',
        //   '100': '#f3eafd',
        //   '200': '#ead9fb',
        //   '300': '#d9bbf7',
        //   '400': '#c290f0',
        //   '500': '#ab65e7',
        //   '600': '#9545d8',
        //   '700': '#8033bd',
        //   '800': '#7030a0',
        //   '900': '#59277c',
        //   '950': '#3c105b',
        // },
        'royal-purple': {
          '50': '#f8f6fe',
          '100': '#eee8fc',
          '200': '#e4dafb',
          '300': '#ccbaf8',
          '400': '#af92f2',
          '500': '#895af6',
          '600': '#7a54d4',
          '700': '#6844bb',
          '800': '#573a9c',
          '900': '#4b3281',
          '950': '#2f1d58',
      },
      
        'wild-strawberry': {
          '50': '#fef1f9',
          '100': '#fee5f4',
          '200': '#ffcaeb',
          '300': '#ff9fd9',
          '400': '#ff63be',
          '500': '#ff299c',
          '600': '#f0127f',
          '700': '#d10563',
          '800': '#ad0751',
          '900': '#8f0c47',
          '950': '#580026',
        },
        'java': {
          '50': '#effefd',
          '100': '#c8fffb',
          '200': '#91fef8',
          '300': '#52f6f2',
          '400': '#1fdfe2',
          '500': '#06bcc1',
          '600': '#02989f',
          '700': '#06787f',
          '800': '#0a5f65',
          '900': '#0e4f53',
          '950': '#002e33',
        },
        'dark-cyan': {
          '50': '#f0fdfb',
          '100': '#cef9f2',
          '200': '#9cf3e7',
          '300': '#63e5d9',
          '400': '#33cec4',
          '500': '#19b3ab',
          '600': '#129490',
          '700': '#127371',
          '800': '#145b5b',
          '900': '#154c4b',
          '950': '#052d2e',
        },
        'turquoise': {
          '50': '#f0fdfa',
          '100': '#cdfaef',
          '200': '#9cf3e0',
          '300': '#62e6ce',
          '400': '#41d3bd',
          '500': '#18b49e',
          '600': '#119082',
          '700': '#12736a',
          '800': '#135c55',
          '900': '#154c48',
          '950': '#052e2c',
        },
        'woodsmoke': {
          '50': '#f7f7f8',
          '100': '#f0eef0',
          '200': '#dcd9de',
          '300': '#bdb8c1',
          '400': '#99919f',
          '500': '#7d7384',
          '600': '#665d6c',
          '700': '#534c58',
          '800': '#48414b',
          '900': '#3e3941',
          '950': '#1a181b',
        }
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}

