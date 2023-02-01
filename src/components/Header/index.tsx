import React from 'react';
import { Container, TitleLogo, Subtitle, Logobox, CartButton } from './styles';
import { MdShoppingCart } from 'react-icons/md';
import { useCartContext } from '../../context/CartContext';
import { useAllCartItems } from '../../hooks/useCart';

function Header() {
  const { open } = useCartContext();
  const cartItems = useAllCartItems();

  return (
    <>
      <Container>
        <Logobox>
          <TitleLogo>
            MKS
          </TitleLogo>
          <Subtitle>
            Sistemas
          </Subtitle>
        </Logobox>
        <CartButton onClick={open}>
          <div>
            <MdShoppingCart size={20} color="#000000" />
          </div>
          {<span>{(cartItems || []).length || 0}</span>}
        </CartButton>
      </Container>
    </>
  )
}
export default Header;