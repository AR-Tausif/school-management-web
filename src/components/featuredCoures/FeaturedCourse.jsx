import React, { useState, useEffect } from 'react';
import HeadTitle from '../utilities/HeadTitle';
import Featured from '../schem/Featured';
import { Container } from 'react-bootstrap';

const FeaturedCourse = () => {
    const [courses, setCourses] = useState([])
    useEffect(()=>{
        fetch('public/course.json')
        .then(res=>res.json())
        .then(data=>setCourses(data.elements))
    },[])
    return (
        <div className="bg-light py-5 ">
            <Container>
            <div className="py-5">
                <HeadTitle title="Explore Featured" dText="Courses"></HeadTitle>
                <div className="row mt-5">
                    {
                        courses && 
                        courses.map(course=> <Featured key={course.id} course={course}></Featured>)
                    }
                </div>
            </div>
        </Container>
        </div>
    );
};

export default FeaturedCourse;