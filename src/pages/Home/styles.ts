import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  height: 100%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ProductList = styled.ul`
  position: absolute;
  top: 180px;
  left: 210px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  list-style: none;
  transition: all 0.5s;

  @media (min-width: 2000px) {
    grid-template-columns: repeat(8, 1fr);
    transition: all 0.5s;
  }
    li {
        display: flex;
        flex-direction: column;
        background: #fff;
        border-radius: 8px;
    }
    img {
        justify-items: flex-start;
        max-width: 200px;
        margin-top: 20px;
    }
    
    div{
        margin-top:10px;
        height: 20px;
    strong {
        position: relative;
        left: 12px;
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 19px;

        color: #2C2C2C;
        }
    span {
            position: relative;
            left: 12px;
            font-style: normal;
            font-weight: 300;
            font-size: 15px;
            line-height: 12px;

            color: #2C2C2C;
        }
    }
    button {
        position: relative;
        background: #0F52BA;
        border-radius: 0px 0px 8px 8px;
        height: 30px;
        color: #fff;
        border: none;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: background 0.2s;
                
        &:hover {
            background: ${darken(0.05, '#0F52BA')};
        }
        svg {
            margin-left: 0;
        }
        span {
            position: relative;
            font-style: normal;
            font-weight: 600;
            font-size: 14px;
            line-height: 18px;
            margin-left: 5px;

            color: #FFFFFF;
        }
    }
`;