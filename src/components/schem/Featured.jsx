import React from 'react';
import { Card } from 'react-bootstrap';

const Featured = ({course}) => {
    console.log(course);
    
    return (
        <div className="col col-md-4 mt-5">
            <Card className="p-2">
                <Card.Img variant="top" src={course.courseImg} />
                <Card.Body>
                    <div className="d-flex justify-content-between align-items-center">
                    <p className=" btn text-white px-2 text-center rounded-5 btn__primary" style={{fontSize: '14px'}}>{course?.courseCategory}</p>
                    <p>100+ Enrolled</p>
                    </div>
                    <Card.Title style={{fontSize: '18px'}}>{course.courseTitle}</Card.Title>
                <Card.Text style={{fontSize: '14px'}}>
                    {course.description && course.description.slice(1, 60)} ...
                </Card.Text>
                <div className="d-flex align-items-center justify-content-between gap-2">
                    <p className="fw-bold"> <i className="bi bi-alarm text-success"></i> 12 Week</p>
                    <p> <i className="bi bi-play-circle-fill"></i> 12 Lessons</p>
                    <p> <i className="bi bi-bar-chart-fill"></i> 12 Beginner</p>
                </div>
                </Card.Body>
                <Card.Footer className="bg-white">
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center gap-3">
                        <img className="rounded rounded-circle" src={course.authorImg} style={{width: '40px', height: '40px'}} />
                        <h6>Jhon doe</h6>
                        </div>
                        <h6 className="fw-bold">Free</h6>
                    </div>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default Featured;