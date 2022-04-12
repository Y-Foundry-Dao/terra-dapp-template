import { ThemeProvider } from 'styled-components';

import theme from 'styles/theme';

interface Props {
  children?: any;
}

const ThemeComponent = ({ children }: Props) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default ThemeComponent;
