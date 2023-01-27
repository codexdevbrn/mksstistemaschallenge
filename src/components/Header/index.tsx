import React from 'react';
import { Container, TitleLogo, Subtitle, Logobox, CartButton } from './styles';
import { MdShoppingCart } from 'react-icons/md';

function Header() {
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
      <CartButton>
        <div>
        <MdShoppingCart size={20} color="#000000" />
        </div>
        <span>{0}</span>
          </CartButton>
      </Container>
  </>
  )
}
export default Header;