import React, { useEffect, useState } from 'react';
import HeadTitle from '../utilities/HeadTitle'
import Category from '../schem/Category';

import "./categories.css"

const Categories = () => {
    const [data, setData] = useState()
    useEffect(()=>{
        fetch("public/categoriData.json")
        .then(res=>res.json())
        .then(data=>setData(data))
    },[])
    console.log(data)
    return (
        <div className="container mt-5">
            <HeadTitle title="Explore Featured" dText="Categories"></HeadTitle>
            <div className="row justify-content-center my-5">
                    {
                        data && 
                        data.map(d => <Category key={d.id} cData={d}></Category>)
                    }
            </div>
        </div>
    );
};

export default Categories;