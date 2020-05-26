import Head from 'next/head';

import Navbar from './Navbar/Navbar';

const Layout = ({ children }) => (
  <>
    <Head>
      <title>Todo App on Next.js</title>
    </Head>
    <Navbar />
    {children}
  </>
);

export default Layout;
