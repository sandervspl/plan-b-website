const theme = {
  color: {
    primary: Object.assign('#BFCE9E', {
      medium: '#7a8e72',
      dark: '#495347',
    }),
    secondary: Object.assign('#202425', {
      medium: '#1E2122',
      dark: '#131516',
      darkest: '#000000',
      hover: '#272a2b',
    }),
    tertiary: '#476369',
    paragraph: '#8e9496',
    highlight: '#ffffff',
  },

  font: {
    primary: 'Heebo, sans-serif',
    secondary: 'Playfair, serif',
  },

  easing: {
    easeOutQuint: 'cubic-bezier(0.23, 1, 0.32, 1)',
    easeOutCirc: 'cubic-bezier(0.075, 0.82, 0.165, 1)',
    easeOutQuart: 'cubic-bezier(0.165, 0.84, 0.44, 1)',
    easeInOutCirc: 'cubic-bezier(0.785, 0.135, 0.15, 0.86)',
  },
};

export default theme;
