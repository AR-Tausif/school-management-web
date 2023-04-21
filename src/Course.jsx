import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import FeaturedCourse from './components/featuredCoures/FeaturedCourse'
import HeadTitle from './components/utilities/HeadTitle';
import Featured from './components/schem/Featured';

const Course = () => {
    // const loadersData = useLoaderData();
    const [courses, setCourses] = useState([])
    console.log(courses);
    const [newss, setNewss] = useState(null)
    useEffect(()=>{
        fetch("https://raw.githubusercontent.com/AR-Tausif/needed-images/main/coures.json")
        .then(res=>res.json())
        .then(data=>setCourses(data))
        
    },[])
    useEffect(()=>setNewss(courses),[courses])
    console.log(newss,'55');
// useEffect(()=> setCourses(loadersData) , [])
//     console.log(courses);
    const handleSearch =(data)=>{
        const filteredCourse = courses?.filter(course => course.courseCategory === data);
        setNewss(filteredCourse)
    }

    const handleOnChange =(e)=>{
        const {value} = e.target;
        const filteredCourse = courses.filter(course => course.courseCategory === value);
        setNewss(filteredCourse);
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
            setCourses(courses)
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
                            <input type="checkbox" value="" onChange={()=>setCourses(courses)} /> <span> All Courses </span>
                        </div>
                    </div>
                </div>
                <div className="col-9">
                    <div className="bg-light py-3 px-5">
                        <h4>{newss?.length} Courses Found</h4>
                    </div>
                    <div className="row">
                    {
                        newss &&
                        newss.map(course => <Featured key={course.id} course={course}></Featured> )
                    }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Course;