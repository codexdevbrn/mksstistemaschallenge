import React from 'react';
import { Provider } from 'react-redux';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import Home from '../src/pages/Home';
import GlobalStyle from './styles/global';
import { store } from './features/store';
import { CartContextProvider } from './context/CartContext';
import { Cart } from './components/Cart';
function App() {
  return (
    <>
      <Provider store={store}>
        <CartContextProvider > 
          <Header />
          <Cart />
        <Home />
        <Footer />
        <GlobalStyle />
        </CartContextProvider>
      </Provider>

    </>
  );
}
export default App;
