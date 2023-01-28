import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import Home from '../src/pages/Home';
import GlobalStyle from './styles/global';
import { store } from './features/store';

function App() {
  return (
    <>
      <Header />
      <ReduxProvider store={store} children={<Home/>} />
      <Footer />
      <GlobalStyle />
    </>
  );
}
export default App;
