import React from 'react';
import { Container, TitleLogo, Subtitle, Logobox } from './styles';

function Header() {
  return (
    <>
      <Container />
      <Logobox>
        <TitleLogo>
          MKS
        </TitleLogo>
        <Subtitle>
          Sistemas
        </Subtitle>
      </Logobox>
    </>
  )
}
export default Header;