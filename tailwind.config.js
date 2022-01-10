module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        workSans: ['Work Sans', 'serif']
      },

      colors: {
        primary: {
          dark: '#121212',
          base: '#282828',
          light: '#595959'
        },
        secondary: {
          dark: '#0C2C56',
          base: '#054BA6',
          light: '#3F92FF'
        },
        tertiary: '#ECF3D8',
        danger: '#D9042B',
        warning: '#ECF330',
        success: '#0FBD6E'
      }
    },
  },
  plugins: [],
}
