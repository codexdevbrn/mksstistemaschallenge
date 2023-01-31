import styled from "styled-components";

interface QuantityInputProps {
  length: number;
}

export const CartProductCardContainer = styled.div`
  border-radius: 8px;
  background-color: white;
  box-shadow: 0 2px 8px rgb(0 0 0 / 0.1352);
  justify-content: space-between;
  position: relative;
  display: flex;
  flex-direction: row;
  padding: 1.3125rem 1rem;
`;

export const DeleteFromCartButton = styled.button`
  position: absolute;
  margin-top: -10px ;
  top: 0;
  right: 0;
  width: 2rem;
  border-style: none;
  border-radius: 50%;
  font-size: 2rem;
  font-weight: 400;
  line-height: 1;
  background: none;
 
  color: black;
`;

export const Image = styled.img`
  object-fit: contain;
  height: 80px;
`;

export const Title = styled.strong`
  font-size: 1rem;
  line-height: 1.1875rem;
  font-weight: 400;
  margin-top: 30px;
  color: black;
  text-align: center;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const QuantityPriceContainer = styled.div`
  margin-top: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-left: 10px;
`;

export const QuantityContainer = styled.div`
  height: 2.125rem;
  border-radius: 4px;
  padding: 0.25rem;
  display: flex;
  align-items: center;
  position: relative;
  border: 0;
`;

export const QuantityLabel = styled.label`
  font-weight: 400;
  font-size: 0.5rem;
  color: black;
  position: absolute;
  top: -5px;
  left: 5px;
`;

export const DecrementButton = styled.button`
  height: 100%;
  width: 1.75rem;
  line-height: 0;
  display: flex;
  border-radius: 8px 0px 0px 8px;
  border-style: none;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 400;
  transition: filter 200ms linear;
  &:hover {
    filter: brightness(0.9);
  }
`;

export const IncrementButton = styled.button`
height: 100%;
  width: 1.75rem;
  line-height: 0;
  display: flex;
  border-radius: 0px 8px 8px 0px;
  border-style: none;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 400;
  transition: filter 200ms linear;
  &:hover {
    filter: brightness(0.9);
  }
`;

export const QuantityInput = styled.input<QuantityInputProps>`
  height: 100%;
  padding-inline: 0.25rem;
  width: 40px;
  text-align: center;
  border-radius: 0;
  border-style: hidden;
  font-size: 1.125rem;
  font-weight: 400;
  background: none;
`;

export const PriceBadge = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* padding: 0.5rem 1.125rem; */
  border-radius: 5px;
  width: 100px;
`;

export const Price = styled.span`
  font-size: 15px;
  font-weight: 700;
  line-height: 1;
  color: black;
`;