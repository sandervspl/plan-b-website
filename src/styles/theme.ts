const theme = {
  color: {
    primary: Object.assign('#DE3D3D', {
      dark: '#A24444',
    }),
    secondary: '#131516',
    tertiary: Object.assign('#476369', {
      light: '#E4E3E3',
    }),
    background: '#FFFFFF',
    glitch: {
      primary: 'palevioletred',
      secondary: 'darkturquoise',
    },
    blocks: {
      recruitment: '#476369',
      otherNews: '#E4E3E3',
    },

    __OLD__: {
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
      border: {
        light: '#8e9496',
        dark: '#131516',
      },
    },
  },

  font: {
    primary: 'Heebo, sans-serif',
    secondary: 'Playfair, serif',
  },

  width: {
    page: '1005px',
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
