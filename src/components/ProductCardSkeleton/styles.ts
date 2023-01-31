import styled from "styled-components";

export const ProductCardSkeletonContainer = styled.div`
  border-radius: 8px;
  background-color: white;
  box-shadow: 0 2px 8px rgb(0 0 0 / 0.1352);
  overflow: hidden;
  padding-top: 1.125rem;
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 350px;
  @media (prefers-reduced-motion: move) {
    animation: pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }
`;

export const SkeletonImage = styled.div`
   max-width: 600px;
  height: 200px;
  background-color: #EEEEEE;
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

export const Title = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
`;

export const SkeletonTitle = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.1875;
  background-color: #EEEEEE;
`;

export const SkeletonPrice = styled.div`
  padding: 15px;
  border-radius: 8px;
  margin-left: 132px;
  height: 15px;
  width: 150px;
  background-color: #EEEEEE;
`;

export const Description = styled.div`
  margin-top: 10px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
`;

export const SkeletonDescription = styled.div`
  height: 0.625rem;
  width: 100%;
  border-radius: 100vmax;
  background-color: #EEEEEE;
`;

export const SkeletonBuyButton = styled.div`
  margin-top: 0.875rem;
  width: 100%;
  padding: 0.5rem;
  height: 2rem;
  background-color: #EEEEEE;
`;