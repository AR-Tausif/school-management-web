import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';

import "./logoHeaderOne.css"

const LogoHeaderOne = () => {
    const [imgs, setImgs] = useState([]);
        useEffect(()=>{
            fetch("https://raw.githubusercontent.com/AR-Tausif/needed-images/main/coures_data_logos.json")
            .then(res=> res.json())
            .then(data=> setImgs(data))
        },[])
        console.log(imgs);
    return (
      <div className="m-auto container bg-none position-relative">
        <div className="container px-5 py-4 d-flex bg-light justify-content-between rounded shadow-lg" style={{position: 'relative', bottom: '-120px'}}>
                <div>
                    <h2 className="fs-5 fw-semibold text-end">All In One <br /> Place</h2>
                </div>
                {
                    imgs.map( (img, index) => <img key={index} style={{width: "220px"}} src={img.img_logo} /> )    
                }
            </div>
      </div>
    );
};

export default LogoHeaderOne;