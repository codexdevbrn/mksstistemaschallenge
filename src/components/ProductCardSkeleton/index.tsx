import React from 'react';
import {
  Content,
  Description,
  Header,
  ProductCardSkeletonContainer,
  SkeletonBuyButton,
  SkeletonDescription,
  SkeletonImage,
  SkeletonPrice,
  SkeletonTitle,
  Title,
} from "./styles";

export const ProductCardSkeleton: React.FC= ({}) => (
  <ProductCardSkeletonContainer
  >
    <SkeletonImage />

    <Content>
      <Header>
        <Title>
          <SkeletonTitle />
          <SkeletonTitle style={{ width: "50%" }} />
        </Title>

        <SkeletonPrice />
      </Header>

      <Description>
        <SkeletonDescription />
        <SkeletonDescription style={{ width: "75%" }} />
      </Description>
    </Content>
    <SkeletonBuyButton />
  </ProductCardSkeletonContainer>
);