import React from 'react';
import NavigationBar from './components/navbar/NavigationBar';

import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/Header';
import LogoHeaderOne from './components/layout/LogoHeaderOne';
import FeaturedCourse from './components/featuredCoures/FeaturedCourse';
import Categories from './components/categories/Categories';
import Membership from './components/membership/Membership';

const App = () => {
  return (
    <>
    <header>
      <NavigationBar></NavigationBar>
      <div id='header__main'>
        <Header></Header>
        <LogoHeaderOne></LogoHeaderOne>
      </div>
    </header>
    <main>
      <FeaturedCourse></FeaturedCourse>
      <Categories></Categories>
      <Membership></Membership>
    </main>
    </>
  );
};

export default App;