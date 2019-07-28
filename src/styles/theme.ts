const theme = {
  color: {
    primary: Object.assign('#DE3D3D', {
      dark: '#A24444',
    }),
    secondary: Object.assign('#E4E4E4', {
      medium: '#CFCECE',
      dark: '#B6B6B6',
      darker: '#8E9496',
    }),
    background: Object.assign('#181818', {
      light: '#1E1E1E',
      content: '#1F1F1F',
      gradient: {
        title: '-webkit-gradient(linear, left top, left bottom, from(#272727), to(#1b1a1a))',
      },
    }),
    glitch: {
      primary: 'palevioletred',
      secondary: 'darkturquoise',
    },
    border: {
      primary: Object.assign('#0C0C0C', {
        lighter: '#414141',
        light: '#333333',
      }),
    },
    tab: {
      active: '#E4E4E4',
      inactive: '#5B5959',
    },
    text: {
      disclaimer: '#7b7b7b',
    },
    positive: '#51C163',
    negative: '#EF7C69',
    discord: '#7289DA',
  },

  font: {
    primary: '\'Source Sans Pro\', sans-serif',
  },

  width: {
    page: '1200px',
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
    content: '0 0 6px rgba(0, 0, 0, .45)',
    innerContent: '0 -1px 10px rgba(0, 0, 0, .5)',
  },
};

export default theme;
