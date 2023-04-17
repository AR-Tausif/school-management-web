import React from 'react';
import { Card } from 'react-bootstrap';

const Featured = ({course}) => {
    console.log(course.instructors[0].photoUrl);
    return (
        <div className="col-4 mt-5">
            <Card className="p-2">
                <Card.Img variant="top" src={course.photoUrl} />
                <Card.Body>
                    <div className="d-flex justify-content-between align-items-center">
                    <p className="bg-secondary text-white px-2 text-center rounded-5">{course?.categories[1]}</p>
                    <p>100+ Enrolled</p>
                    </div>
                    <Card.Title>{course.name}</Card.Title>
                <Card.Text>
                    {course.description}
                </Card.Text>
                </Card.Body>
                <Card.Footer className="bg-white">
                    <div className="d-flex justify-content-between align-items-center">
                        <img className="rounded-circle" src={course.instructors[0].photoUrl} style={{width: '50px'}} />
                        <h3 className="fw-bold">Free</h3>
                    </div>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default Featured;