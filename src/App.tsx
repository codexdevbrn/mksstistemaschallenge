import React from 'react';
import { Provider } from 'react-redux';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import Home from '../src/pages/Home';
import GlobalStyle from './styles/global';
import { store } from './features/store';
import { CartDrawerContextProvider } from './context/CartDrawerContext';
import { CartDrawer } from './components/CartDrawer';
function App() {
  return (
    <>
      <Provider store={store}>
        <CartDrawerContextProvider > 
          <Header />
          <CartDrawer />
        <Home />
        <Footer />
        <GlobalStyle />
        </CartDrawerContextProvider>
      </Provider>

    </>
  );
}
export default App;
