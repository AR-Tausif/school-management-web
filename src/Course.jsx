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
    const handleSearch =(data)=>{
        const filteredCourse = loadersData.filter(course => course.courseCategory === data);
        setCourses(filteredCourse)
    }

    const handleOnChange =(e)=>{
        const {value} = e.target;
        const filteredCourse = loadersData.filter(course => course.courseCategory === value);
        setCourses(filteredCourse);
    }

    const searchOnchange =(e)=>{
        const trgtVal = e.target.value;
        if(trgtVal == 'Development' || trgtVal == 'development' || trgtVal == 'dev' || trgtVal == 'dev' || trgtVal == 'Dev'){
            handleSearch("Development")
        }else if(trgtVal == 'IT & Software' || trgtVal == 'it & software' || trgtVal == 'it' || trgtVal == 'software' || trgtVal == 'Dev'){
            handleSearch("IT & Software")
        }else if(e.target.value == ('Development' || 'development' || 'dev' || 'Dev')){
            handleSearch("Development")
        }
        else{
            setCourses(loadersData)
        }
    }

    return (
        <div className="container">
                    <HeadTitle title="Explore Featured" dText="Courses"></HeadTitle>
            <div className="row">
                <div className="col bg-light">
                    <div className="input-group py-4">
                        <input type="text" className="form-control" placeholder="Search" onChange={searchOnchange}  />
                        <button className="btn btn-outline-secondary" type="button" id="inputGroupFileAddon04">Button</button>
                    </div>
                    <div className="my-5">
                        <div className="mt-3">
                            <input type="checkbox" name="developer" value="Development" onChange={handleOnChange} /> <span> Development </span>
                        </div>

                        <div className="mt-3">
                            <input type="checkbox" name="IT & Software" value="IT & Software" onChange={handleOnChange} /> <span> IT & Software </span>
                        </div>

                        <div className="mt-3">
                            <input type="checkbox" name="Finance & Accounting" value="Finance & Accounting" onChange={handleOnChange} /> <span> Finance & Accounting </span>
                        </div>

                        <div className="mt-3">
                        <input type="checkbox" name="Health & Fitness" value="Health & Fitness" onChange={handleOnChange} /> <span> Health & Fitness </span>
                        </div>

                        <div className="mt-3">
                            <input type="checkbox" value="" onChange={()=>setCourses(loadersData)} /> <span> All Courses </span>
                        </div>
                    </div>
                </div>
                <div className="col-9">
                    <div className="bg-light py-3 px-5">
                        <h4>{courses.length} Courses Found</h4>
                    </div>
                    <div className="row">
                    {
                        courses &&
                        courses.map(course => <Featured key={course.id} course={course}></Featured> )
                    }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Course;