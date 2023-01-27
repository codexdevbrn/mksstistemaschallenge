import styled from 'styled-components';

export const Container = styled.header`
  position: absolute;
  justify-content: space-between;
  align-items: center;
  display: flex;
  width: 100%;
  height: 100px;
  left: 0px;
  top: 0px;

  background: #0F52BA;
`;
export const Logobox = styled.div`
  display: flex;
  position: relative;
  justify-content: flex-start;
  margin-left: 40px;
`;

export const TitleLogo = styled.h1`
  align-self: baseline;
  position: relative;
  left: 4.51%;
  font-weight: 500;
  font-size: 40px;
  align-items: baseline;
  

  color: #FFFFFF;
  letter-spacing: 2px;
`;

export const Subtitle = styled.h2`
  align-self: baseline;
  position: relative;
  left: 10px;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;

  color: #FFFFFF;
  letter-spacing: 2px;
`;


export const CartButton = styled.button`
  display: flex;
  position: relative;
  align-items: center;
  width: 65px;
  height: 35px;
  right: 100px;

  background: #FFFFFF;
  border-radius: 8px;
  border-style: none;
  transition: opacity 0.2;

  &:hover {
    opacity: 0.8;
  }

  div {
    margin-left: 10px;
    margin-top: 2px;
  }
  span {
    width: 13px;
    height: 22px;
    margin-left: 10px;
    top: 40px;

    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;

    color: #000000;

  }
`;