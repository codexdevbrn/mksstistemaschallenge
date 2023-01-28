import React, { useEffect, useState } from 'react';
import { useProducts } from '../../hooks/useProducts';
import { useDispatch } from '../../features/hooks/hooks';
import { fetchProducts } from '../../utils/fecthProducts';
import { productsActions } from '../../features/actions/productSlice';
import { ProductCard } from '../../components/ProductCard';

import { Container } from './styles';

const pages = 8;

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
        {(products || []).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Container>
    </>
  );
}
export default Home;