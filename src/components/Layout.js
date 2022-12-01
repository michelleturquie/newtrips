import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer/footer';
import Navbar from './Navbar';

const Layout = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Outlet />
      <Footer />
    </React.Fragment>
  )
}

export default Layout;
