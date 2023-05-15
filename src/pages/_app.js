import React from 'react';
import Header from '../components/header/header.jsx';
import '../styles/styles.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}
