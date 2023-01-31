import React from 'react';
import { ProductTypes } from "../../@types/ProductTypes";
import { useDispatch } from "../../features/hooks/hooks"
import { cartActions } from "../../features/actions/cartSlice"
import { MdShoppingBag } from 'react-icons/md';
import { formatPrice } from "../../utils/formatPrice";

import {
  BuyButton, Content, Description,
  Header, Image, Price, PriceBadge,
  ProductCardContainer, Title
} from './styles';

interface CardProps {
  product: ProductTypes;
}

export const ProductCard: React.FC<CardProps> = ({ product }) => {
  const dispatch = useDispatch();
  function handleAddToCart() {
    dispatch(
      cartActions.addItem({
        productId: product.id,
      }),
    );
  }
  return (
    <ProductCardContainer>
      <Image src={product.photo} alt={product.name} />
      <Content>
        <Header>
          <Title>{product.name}</Title>
          <PriceBadge>
            <Price>{formatPrice(product.price)}</Price>
          </PriceBadge>
        </Header>
        <Description>{product.description}</Description>
      </Content>
      <BuyButton type="button" onClick={handleAddToCart} >
        <MdShoppingBag size={20} />
        <span>Comprar</span>
      </BuyButton>
    </ProductCardContainer>

  );
}