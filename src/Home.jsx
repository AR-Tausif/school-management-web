import React, { useState, useEffect } from 'react';
import Header from './components/header/Header';
import LogoHeaderOne from './components/layout/LogoHeaderOne';
import FeaturedCourse from './components/featuredCoures/FeaturedCourse';
import Categories from './components/categories/Categories';
import Membership from './components/membership/Membership';
import ReviewPage from './components/reviewPage/ReviewPage';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    // const loadersData = useLoaderData();
    // const [courses, setCourses] = useState([])
    // const [news, setNews] = useState([])
    const [newss, setNewss] = useState([])

    console.log(newss);
    // useEffect(()=>{
    //     setCourses(loadersData)
        
    // },[])
    useEffect(()=>{
        fetch("https://raw.githubusercontent.com/AR-Tausif/needed-images/main/coures.json")
        .then(res=>res.json())
        .then(data=>setNewss(data))
        
    },[])

    newss.splice(6)
    return (
        <>
            <header>
            <div id='header__main'>
                <Header></Header>
                <LogoHeaderOne />
            </div>
            </header>
            <main>
                <FeaturedCourse courses={newss} title="Explore Featured" dText="Courses"></FeaturedCourse>
                <Categories></Categories>
                <Membership />
                <ReviewPage />
                <FeaturedCourse courses={newss} title="Latest News &" dText="Articles"></FeaturedCourse>
            </main>
        </>
    );
};

export default Home;