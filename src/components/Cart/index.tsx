import React, { useMemo } from "react";
import { useCartContext } from "../../context/CartContext";
import { useAllCartItems } from "../../hooks/useCart";
import { useDispatch } from '../../features/hooks/hooks';
import { cartActions } from '../../features/actions/cartSlice';
import { formatPrice } from '../../utils/formatPrice';
import { CartProductCard } from '../CartProductsCard';
import {AiFillCloseCircle} from 'react-icons/ai'
import {
  CartContainer,
  CloseButton,
  CompletePurchaseButton,
  Content,
  Footer,
  Header,
  NoProductsText,
  Products,
  Title,
} from "./styles";

export const Cart: React.FC = () => {
  const { isOpen, close } = useCartContext();
  const cartItems = useAllCartItems();
  const dispatch = useDispatch();

  function handleCompletePurchase() {
    close();
    dispatch(cartActions.clearItems());
  }

  /* Hook que etorna um valor memorizado | useMemo | */
  const totalValue = useMemo(() => {
      return formatPrice(
        (cartItems || []).reduce(
          (total, item) => total + item.product.price * item.quantity,
          0,
        ) || 0,
      );

    }, [cartItems]);  

  return (
    <CartContainer isOpen={isOpen}>
      <Content>
        <Header>
          <Title>
            Carrinho <br />
            de compras
          </Title>
          <CloseButton type="button" onClick={close} title="Fechar">
          <AiFillCloseCircle size={40} color={'#000000'}/>
          </CloseButton>
        </Header>

        <Products>
          {(cartItems || []).length ? (
            (cartItems || []).map(item => (
              <CartProductCard key={item.product.id} {...item} />
            ))
          ) : (
            <NoProductsText>Seu carrinho está vazio.</NoProductsText>
          )} 
        </Products>
      </Content>

      <Footer>
        <span>Total:</span>
       <span>{totalValue}</span>
      </Footer>

      <CompletePurchaseButton type="button" onClick={handleCompletePurchase}>
        Finalizar Compra
      </CompletePurchaseButton>
    </CartContainer>
  );
};