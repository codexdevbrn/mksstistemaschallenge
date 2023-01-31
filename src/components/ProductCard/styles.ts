import styled from "styled-components";
import { darken } from 'polished';

export const ProductCardContainer = styled.div`
  border-radius: 8px;
  background-color: white;
  box-shadow: 0 2px 8px rgb(0 0 0 / 0.1352);
  overflow: hidden;
  padding-top: 1.125rem;
  align-items: center;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  width: 300px;
  height: 380px;
`;

export const Image = styled.img`
  max-width: 600px;
  height: 200px;
`;

export const Content = styled.div`
  padding: 14px 12px 12px 14px;
`;

export const Header = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 0.25rem;
`;

export const Title = styled.h2`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.1875;
  position: relative;
  color: black;
`;

export const PriceBadge = styled.div`
  background-color: #373737;
  padding: 0.375rem;
  border-radius: 5px;
  display: flex;
  position: relative;

  align-items: center;
  justify-content: space-between;
`;

export const Price = styled.span`
  font-weight: 700;
  font-size: 15px;
  line-height: 1;
  color: white;
`;

export const Description = styled.p`
  margin-top: 0.5rem;
  font-weight: 300;
  font-size: 10px;
  line-height: 1.2;
  color: black;
`;

export const BuyButton = styled.button`
  position: relative;
  margin-top: auto;
  width: 100%;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
  border-style: none;
  font-weight: 600;
  font-size: 14px;
  text-transform: uppercase;
  background-color: #0F52BA;
  color: white;

  transition: filter 200ms linear;
  &:hover {
    background: ${darken(0.05, '#0F52BA')};
  }
`;