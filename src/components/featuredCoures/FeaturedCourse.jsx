import React from 'react';
import HeadTitle from '../utilities/HeadTitle';
import Featured from '../schem/Featured';
import { Container } from 'react-bootstrap';

const FeaturedCourse = ({courses, title, dText}) => {

    return (
        <div className="bg-light py-5 ">
            <Container>
            <div className="py-5">
                <HeadTitle title={title} dText={dText}></HeadTitle>
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