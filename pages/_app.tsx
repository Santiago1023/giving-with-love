import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider, CssBaseline} from '@mui/material';
import { SWRConfig } from 'swr';
import { lightTheme } from '../themes';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig
      value={{
        // refreshInterval: 3000, página constantemente recargada 
        fetcher: (resource, init) => fetch(resource, init).then(res => res.json())
      }}
    >
      <ThemeProvider theme={lightTheme}>
        <CssBaseline/>
        <Component {...pageProps}/>
      </ThemeProvider>
    </SWRConfig>
  )
}

export default MyApp