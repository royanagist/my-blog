import Layout from '@/components/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/globals.css';
import { store } from '@/store';
import { Provider } from 'react-redux';
import { useEffect } from 'react';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    require('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
