import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import FeaturedCourse from './components/featuredCoures/FeaturedCourse'
import HeadTitle from './components/utilities/HeadTitle';
import Featured from './components/schem/Featured';

const Course = () => {
    const loadersData = useLoaderData();
    const [courses, setCourses] = useState(loadersData)

// useEffect(()=> setCourses(loadersData) , [])
//     console.log(courses);

    return (
        <div className="container">
                    <HeadTitle title="Explore Featured" dText="Courses"></HeadTitle>
            <div className="row">
                <div className="col bg-light">
                    <div class="input-group py-4">
                        <input type="text" class="form-control" placeholder="Search"  />
                        <button class="btn btn-outline-secondary" type="button" id="inputGroupFileAddon04">Button</button>
                    </div>
                    <div className="my-5">
                        <div className="mt-3">
                        <input type="checkbox" name="developer" value="Development" /> <span> Development </span>
                        </div>
                        <div className="mt-3">
                        <input type="checkbox" name="developer" value="Development" /> <span> Development </span>
                        </div>
                        <div className="mt-3">
                        <input type="checkbox" name="developer" value="Development" /> <span> Development </span>
                        </div>
                        <div className="mt-3">
                        <input type="checkbox" name="developer" value="Development" /> <span> Development </span>
                        </div>
                        <div className="mt-3">
                        <input type="checkbox" name="developer" value="Development" /> <span> Development </span>
                        </div>
                    </div>
                </div>
                <div className="col-9">
                    <div className="bg-light py-3 px-5">
                        <h4>{courses.length} Courses Found</h4>
                    </div>
                    <div className="row">
                    {
                        courses?.map(course => <Featured key={course.id} course={course}></Featured> )
                    }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Course;