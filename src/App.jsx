import React, { useState, useEffect } from 'react';
import NavigationBar from './components/navbar/NavigationBar';
import FooterSection from './components/footer/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet } from 'react-router-dom';

const App = () => {

  return (
    <>
    <nav>
      <NavigationBar />
    </nav>
    <main>
      <Outlet></Outlet>
    </main>
    <footer>
      <FooterSection/>
    </footer>
    </>
  );
};

export default App;