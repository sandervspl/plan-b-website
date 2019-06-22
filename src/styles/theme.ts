const theme = {
  color: {
    primary: Object.assign('#DE3D3D', {
      dark: '#A24444',
    }),
    secondary: Object.assign('#FFFFFF', {
      dark: '#DADADA',
    }),
    background: Object.assign('#181818', {
      light: '#1E1E1E',
    }),
    glitch: {
      primary: 'palevioletred',
      secondary: 'darkturquoise',
    },
    border: {
      primary: '#0C0C0C',
    },
    text: {
      disclaimer: '#7b7b7b',
    },
  },

  font: {
    primary: 'Heebo, sans-serif',
    secondary: 'Playfair, serif',
  },

  width: {
    page: '1005px',
    login: '365px',
  },

  easing: {
    easeOutQuint: 'cubic-bezier(0.23, 1, 0.32, 1)',
    easeOutCirc: 'cubic-bezier(0.075, 0.82, 0.165, 1)',
    easeOutQuart: 'cubic-bezier(0.165, 0.84, 0.44, 1)',
    easeInOutCirc: 'cubic-bezier(0.785, 0.135, 0.15, 0.86)',
  },

  shadow: {
    card: '0px 0px 15px -5px rgba(0, 0, 0, .2)',
    icon: '-2px 2px 4px 0 rgba(0, 0, 0, .5)',
  },
};

export default theme;
