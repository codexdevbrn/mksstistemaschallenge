import styled from "styled-components";

export const Container = styled.footer`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 34px;
    left: 0;
    bottom: 0;

    background: #E5E5E5;

    span {
        position: absolute;
        width: 270px;
        height: 17px;
        top: 10px;

        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 15px;

        color: #000000;
    }
`;