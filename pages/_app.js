import { createGlobalStyle } from 'styled-components';

import Layout from '../components/Layout';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400&display=swap.css');

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    color: #69747c;
    font-family: 'Open Sans', sans-serif;
    font-size: .9em;
    font-weight: 400;
  }
`;

function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
      <GlobalStyle />
    </Layout>
  );
}


export default App
