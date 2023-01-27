import React from 'react';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import Home from '../src/pages/Home';
import GlobalStyle from './styles/global';

function App() {
  return (
    <>
      <Header />
      <Home />
      <Footer />
      <GlobalStyle />
    </>
  );
}
export default App;
