import React from 'react';

const HeadTitle = ({title, dText}) => {
    return (
        <div className="">
            <div className="text-center">
                <h2 className="fs-1 py-2 display-2 fw-semibold">{title} <span className="text-success">{dText}</span> </h2>
                <p className="fs-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut <br /> labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
            </div>
        </div>
    );
};

export default HeadTitle;