import styled from 'styled-components';


export const Container = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(4, 0.200fr);

  position: absolute;
  top: 150px;
  padding: 100px;
  margin-left: 350px;

  @media (min-width: 2000px) {
    grid-template-columns: repeat(8, 1fr);
    transition: all 0.5s;
  }
`;