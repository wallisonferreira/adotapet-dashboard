import { AuthProvider } from 'contexts/auth.context';
import { AppProps } from 'next/app';
import Head from 'next/head';

import { ThemeProvider } from 'styled-components';

import GlobalStyles from 'styles/global';
import theme from 'styles/theme';

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <Head>
          <title>Adota PET</title>
          <link rel="manifest" href="/manifest.json" />
          <meta
            name="description"
            content="Sistema inteligente de adoção e resgate de animais"
          />
        </Head>
        <Component {...pageProps} />
      </AuthProvider>
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
