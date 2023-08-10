export interface StyleClosetTheme {
  colors: { [key in keyof typeof colors]: string };
  breakpoints: { [key in keyof typeof breakpoints]: string };
}

const colors = {
  header: '#464D77',
  background: '#F4EDED',
  background2: '#F9DB6D',
  primary: '#F4845F',
  secondary: '#548C2F',
};

const breakpoints = {
  mobile: '480px',
  tablet: '768px',
  desktop: '1025px',
};

const theme: StyleClosetTheme = {
  colors,
  breakpoints,
};

export { theme };
