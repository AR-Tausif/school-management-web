import React from 'react';
import { Button } from 'react-bootstrap';

const Category = ({cData}) => {
    return (
        <Button variant="outline-success" className="col-3 p-5 m-2 text-center">
            <img className="img__sm__w" src={cData.img} alt="" />
            <h5>{cData.title}</h5>
            <p>{cData.type} Course</p>
        </Button>
    );
};

export default Category;