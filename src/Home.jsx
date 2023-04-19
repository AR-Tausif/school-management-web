import React, { useState, useEffect } from 'react';
import Header from './components/header/Header';
import LogoHeaderOne from './components/layout/LogoHeaderOne';
import FeaturedCourse from './components/featuredCoures/FeaturedCourse';
import Categories from './components/categories/Categories';
import Membership from './components/membership/Membership';
import ReviewPage from './components/reviewPage/ReviewPage';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const loadersData = useLoaderData();
    const [courses, setCourses] = useState([])
    const [news, setNews] = useState([])

    useEffect(()=>{
        setCourses(loadersData)
        
    },[])
    useEffect(()=>{
            const newsData = loadersData.slice(0, 3)
            return setNews(newsData)
    },[])
    console.log(news);
    return (
        <>
            <header>
            <div id='header__main'>
                <Header></Header>
                <LogoHeaderOne />
            </div>
            </header>
            <main>
                <FeaturedCourse courses={courses} title="Explore Featured" dText="Courses"></FeaturedCourse>
                <Categories></Categories>
                <Membership />
                <ReviewPage />
                <FeaturedCourse courses={news} title="Latest News &" dText="Articles"></FeaturedCourse>
            </main>
        </>
    );
};

export default Home;