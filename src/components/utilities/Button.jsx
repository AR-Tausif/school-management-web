import React from 'react';
import './button.css'

const Button = ({textdata, iconData}) => {
    return (
            <button className='btn__primary btn px-4 fs-5 '>  {iconData} {textdata}</button>
    );
};

export default Button;