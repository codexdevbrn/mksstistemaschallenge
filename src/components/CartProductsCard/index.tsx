import React, { useState } from "react";
import { ProductTypes } from "../../@types/ProductTypes";
import { useDispatch } from "../../features/hooks/hooks";
import { cartActions } from "../../features/actions/cartSlice";
import { formatPrice } from "../../utils/formatPrice";
import {AiFillCloseCircle} from 'react-icons/ai';

import {
  CartProductCardContainer,
  DeleteFromCartButton,
  Image,
  Price,
  PriceBadge,
  DecrementButton,
  IncrementButton,
  QuantityContainer,
  QuantityInput,
  QuantityLabel,
  QuantityPriceContainer,
  Title,
} from "./styles";

interface CartProductProps {
  product: ProductTypes;
  quantity: number;
}

export const CartProductCard: React.FC<CartProductProps> = ({
  product,
  quantity,
}) => {
  const [quantityInput, setQuantityInput] = useState(quantity);
  const dispatch = useDispatch();

  /* Remove item do carrinho */
  function handleRemoveItemFromCart() {
    dispatch(
      cartActions.removeItem({
        productId: product.id,
      }),
    );
  }

  function handleDecrementQuantity() {
    let newQuantity = 1;

    if (!isNaN(quantityInput)) {
      newQuantity = Math.max(quantityInput - 1, 1);
    }

    setQuantityInput(newQuantity);

    dispatch(
      cartActions.updateItemQuantity({
        productId: product.id,
        quantity: newQuantity,
      }),
    );
  }

  function handleIncrementQuantity() {
    let newQuantity = 1;

    if (!isNaN(quantityInput)) {
      newQuantity = quantityInput + 1;
    }

    setQuantityInput(newQuantity);

    dispatch(
      cartActions.updateItemQuantity({
        productId: product.id,
        quantity: newQuantity,
      }),
    );
  }

  function handleInputQuantityChange(
    event: React.ChangeEvent<HTMLInputElement>,
  ) {
    const value = parseInt(event.target.value);
    setQuantityInput(value);

    if (!isNaN(value)) {
      dispatch(
        cartActions.updateItemQuantity({
          productId: product.id,
          quantity: value,
        }),
      );
    }
  }

  const inputId = `product-${product.id}:quantity`;

  return (
    <CartProductCardContainer>
      <DeleteFromCartButton
        type="button"
        onClick={handleRemoveItemFromCart}
      >
        <AiFillCloseCircle size={40}/>
      </DeleteFromCartButton>

      <Image src={product.photo} alt={product.name} />
      <Title>{product.name}</Title>

      <QuantityPriceContainer>
        <QuantityContainer>
          <QuantityLabel htmlFor={inputId}>Qtd:</QuantityLabel>

          <DecrementButton
            type="button"
            onClick={handleDecrementQuantity}
          >-</DecrementButton>

          <QuantityInput
            id={inputId}
            type="text"
            inputMode="numeric"
            value={isNaN(quantityInput) ? "" : quantityInput}
            onChange={handleInputQuantityChange}
            length={quantityInput.toString().length}
          />

          <IncrementButton
            type="button"
            onClick={handleIncrementQuantity}
          >+</IncrementButton>
        </QuantityContainer>

        <PriceBadge>
          <Price>{formatPrice(product.price * quantity)}</Price>
        </PriceBadge>
      </QuantityPriceContainer>
    </CartProductCardContainer>
  );
};
