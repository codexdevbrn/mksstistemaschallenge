import { createGlobalStyle } from "styled-components"


export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;600&display=swap');
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body {
    background: #E5E5E5;
  }
  body, input, button {
    font: 14px 'Montserrat', sans-serif;
  }
  #root {
    margin: 0 auto;
    padding: 0 20px 50px;
  }
  button {
    cursor: pointer;
  }
`;
