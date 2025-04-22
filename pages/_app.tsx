import React from 'react';
import { AppProps } from 'next/app';
// import '../styles/globals.css';
import { Provider } from 'react-redux';
import { store } from '../src/app/redux/store';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <div>
        <Component {...pageProps} />
      </div>
    </Provider>
  );
};

export default MyApp;
