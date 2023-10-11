import tinycolor from 'tinycolor2';

const theme = {
  helpers: {
    mix: tinycolor.mix,
  },
  palette: {
    black: '#000000',
    white: '#FFFFFF',
    bg: '#F8F7F2',
    txt: '#151515',
    red: '#F5545E',
    red20: tinycolor.mix('#F5545E', '#FFFFFF', 20).toRgb(),
    red40: tinycolor.mix('#F5545E', '#FFFFFF', 40).toRgb(),
    yellow: '#EFC556',
    yellow20: tinycolor.mix('#EFC556', '#FFFFFF', 20).toRgb(),
    yellow40: tinycolor.mix('#F5545E66', '#FFFFFF', 40).toRgb(),
    green: '#3E4137',
  },
};

export default theme;
