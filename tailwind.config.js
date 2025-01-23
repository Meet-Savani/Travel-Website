/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      fontFamily: {
        'Poppins': ['Poppins', 'sans-serif'],
        'Roboto': ['Roboto', 'sans-serif']
      },
      colors: {
        'navbar' : "#213638"
      },
      backgroundImage: {
        'hero-page' : "url('./Images/Hero Page.jpg')",
        'paradise' : "url('./Images/Paradise.jpg')",
        'Form' : "url('./Images/Form.jpg')", 
        'Form1' : "url('./Images/Form1.jpg')" 
      }
    },
  },
  plugins: [],
}

