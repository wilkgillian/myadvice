import type { AppProps } from 'next/app';
import Header from '../components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'rsuite/dist/rsuite.min.css';
import { Provider } from 'react-redux';
import store from '../store';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Header />
      <Component {...pageProps} />
    </Provider>
  );
}
