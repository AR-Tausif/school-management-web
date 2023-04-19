import React, { useState, useEffect } from 'react';
import NavigationBar from './components/navbar/NavigationBar';

import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/Header';
import LogoHeaderOne from './components/layout/LogoHeaderOne';
import FeaturedCourse from './components/featuredCoures/FeaturedCourse';
import Categories from './components/categories/Categories';
import Membership from './components/membership/Membership';
import ReviewPage from './components/reviewPage/ReviewPage';
import FooterSection from './components/footer/Footer';

const App = () => {
  const [courses, setCourses] = useState([])
  const [news, setNews] = useState([])
  useEffect(()=>{
      fetch('public/course.json')
      .then(res=>res.json())
      .then(data=>setCourses(data.elements))
  },[])
  useEffect(()=>{
      fetch('public/course.json')
      .then(res=>res.json())
      .then(data=> {
        const newsData = data.elements.slice(0, 3)
        return setNews(newsData)
      })
  },[])
  console.log(news);
  return (
    <>
    <header>
      <div id='header__main'>
      <NavigationBar></NavigationBar>
        <Header></Header>
        <LogoHeaderOne></LogoHeaderOne>
      </div>
    </header>
    <main>
      <FeaturedCourse courses={courses} title="Explore Featured" dText="Courses"></FeaturedCourse>
      <Categories></Categories>
      <Membership></Membership>
      <ReviewPage></ReviewPage>
      <FeaturedCourse courses={news} title="Latest News &" dText="Articles"></FeaturedCourse>
      <FooterSection></FooterSection>
    </main>
    </>
  );
};

export default App;