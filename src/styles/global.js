import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,500&display=swap');
  * {
      padding: 0;
      margin: 0;
      outline: 0;
      box-sizing: border-box;
      list-style: none;
  }
  
  #root {
      max-width: 1020px;
      margin: 0 auto;
      padding: 0 20px 30px;
  }
  body, input, button, select {
      font-family: 'Roboto', sans-serif;
      outline: none;
      border: none;
  }
  body {
      background-color: #e5e6f0;
      -webkit--font-smoothing: antialiased;
  }
`;