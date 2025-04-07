/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx,html}", // sesuaikan dengan struktur proyekmu
    ],
    theme: {
      extend: {
        maskImage: {
          'fade-bottom': 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
          'fade-top': 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
        },
      },
    },
    plugins: [
      function ({ matchUtilities, theme }) {
        matchUtilities(
          {
            'mask': (value) => ({
              maskImage: value,
            }),
          },
          { values: theme('maskImage') }
        );
      },
    ],
  };
  