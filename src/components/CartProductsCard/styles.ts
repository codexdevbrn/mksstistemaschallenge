import styled, { css } from "styled-components";

export const CartProductCardContainer = styled.div`
  border-radius: 8px;
  background-color: white;
  box-shadow: 0 2px 8px rgb(0 0 0 / 0.1352);
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 1.3125rem 1rem;
`;

export const DeleteFromCartButton = styled.button`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  aspect-ratio: 1 / 1;
  width: 2rem;
  border-radius: 50%;
  font-size: 2rem;
  font-weight: 400;
  line-height: 1;
 
  color: black;
`;

export const Image = styled.img`
  object-fit: contain;
  height: 100px;
`;

export const Title = styled.strong`
  margin-top: 0.875rem;
  font-size: 1rem;
  line-height: 1.1875rem;
  font-weight: 400;
  color: white;
  text-align: center;
  
`;

export const QuantityPriceContainer = styled.div`
  margin-top: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  
`;

export const QuantityContainer = styled.div`
  height: 2.125rem;
  border-radius: 4px;
  padding: 0.25rem;
  display: flex;
  align-items: center;
  position: relative;
  border: 0;
  color: black;
`;

export const QuantityLabel = styled.label`
  font-weight: 400;
  font-size: 0.5rem;
  display: none;
`;

export const QuantityButton = styled.button`
  height: 100%;
  width: 1.75rem;
  line-height: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 400;
  transition: filter 200ms linear;
  &:hover {
    filter: brightness(0.9);
  }
`;

interface QuantityInputProps {
  length: number;
}

export const QuantityInput = styled.input<QuantityInputProps>`
  height: 100%;
  padding-inline: 0.25rem;
  width: 10px;
  text-align: center;
  border-inline: 1px solid gray;
  font-size: 1.125rem;
  font-weight: 400;

`;

export const PriceBadge = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1.125rem;
  border-radius: 5px;
`;

export const Price = styled.span`
  font-size: 0.9375rem;
  font-weight: 700;
  line-height: 1;
  color: white;
`;