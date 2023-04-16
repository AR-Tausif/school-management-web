import React from 'react';
import NavigationBar from './components/navbar/NavigationBar';

import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/Header';
import LogoHeaderOne from './components/layout/LogoHeaderOne';
import FeaturedCourse from './components/featuredCoures/FeaturedCourse';

const App = () => {
  return (
    <>
    <header>
      <NavigationBar></NavigationBar>
      <div id='header__main'>
        <Header></Header>
      </div>
    </header>
    <LogoHeaderOne></LogoHeaderOne>
    <main>
      <FeaturedCourse></FeaturedCourse>
    </main>
    </>
  );
};

export default App;