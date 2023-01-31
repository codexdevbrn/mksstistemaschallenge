import React, { useEffect, useState } from 'react';
import { useProducts } from '../../hooks/useProducts';
import { useDispatch } from '../../features/hooks/hooks';
import { fetchProducts } from '../../utils/fecthProducts';
import { productsActions } from '../../features/actions/productSlice';
import { ProductCard } from '../../components/ProductCard';

import { Container } from './styles';
import { ProductCardSkeleton } from '../../components/ProductCardSkeleton';

const pages = 8;
const skeletonProductsArray = Array.from({ length: pages }, (_, i) => i);

const Home: React.FC = () => {

  const products = useProducts();
  const dispatch = useDispatch();
  useEffect(() => {
    const controller = new AbortController();

    fetchProducts(pages, { signal: controller.signal }).then(
      response => {
        dispatch(
          productsActions.setProducts({
            products: response.products.map(product => ({
              ...product,
              price: Number(product.price),
            }))
          })
        )
      }
    ).catch(error => {
      console.log(error)
    });

    return () => {
      controller.abort();
    };
  }, [dispatch]);


  return (
    <>
      <Container>
        {!products
        ? skeletonProductsArray.map(number => (
            <ProductCardSkeleton key={number} />
          ))
        :  (products || []).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Container>
    </>
  );
}
export default Home;