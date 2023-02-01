import styled, { css } from "styled-components";

interface CartContainerProps {
  isOpen: boolean;
}

export const CartContainer = styled.aside<CartContainerProps>`
  position: fixed;
  z-index: 10;
  right: 0;
  top: 0;
  bottom: 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  width: min(500px, 100vw);
  box-shadow: -5px 0 6px rgb(0 0 0 / 0.13);
  transition: transform 300ms ease-in-out;
  background-color: #0F52BA;

  ${({ isOpen }) => css`
  transform: translateX(${isOpen ? "0" : "100%"});
  ` }
`;

export const Content = styled.div`
  padding-top: 1.5rem;
  display: flex;
  flex-direction: column;
  flex: 1;

`;

export const Header = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding-inline: 2rem;

`;

export const Title = styled.strong`
  font-size: 1.6875rem;
  font-weight: 700;
  color: white;
`;

export const CloseButton = styled.button`
  border-radius: 50%;
  display: flex;
  border-style: none;
  background: white;
  transition: opacity 0.2;

  &:hover {
  opacity: 0.8;
}
`;

export const Products = styled.div`
  overflow-y: auto;
  max-height: 55vh;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 0.5rem 1.75rem;
  margin-top: 3.4375rem;
  margin-inline: 0.25rem;

  ::-webkit-scrollbar {
    width: 0px;
  }
`;

export const NoProductsText = styled.p`
  font-size: 1.125rem;
  font-weight: 400;
 color: white;
  text-align: center;
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.75rem;
  font-weight: 700;
  color: white;
  padding: 1.5rem 2rem 2.625rem;
`;

export const CompletePurchaseButton = styled.button`
  width: 100%;
  padding: 2.625rem 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.75rem;
  font-weight: 700;
  color: white;
  background-color: black;
  transition: opacity 0.2;

  &:hover {
    opacity: 0.8;
  }
`;