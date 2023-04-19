import React from 'react';

const ReviewData = () => {
    return (
        <div className="col-3 bg-light p-4 px-4">
            <div className="d-flex gap-3">
            <img src="https://demoapus1.com/skillup/wp-content/uploads/2022/05/user-2.jpg" style={{width: '56px', height: '56px', borderRadius: '50%' }} />
            <div className="fw-semibold" style={{fontSize: '12px', lineHeight: '4px'}}>
                <p className="fs-5 fw-semibold">Sawrab Developer</p>
                <p>Linkedin Leader</p>
                <p className="bg-warning py-1 rounded text-center text-white" style={{width: '77px'}}> <i class="bi bi-star-half"></i> 5stars</p>
            </div>
            </div>
            <p style={{fontSize: '12px'}}> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam error dolores velit dolorum labore facere hic, qui, blanditiis dolorem iusto vel aliquid odit nam iste! Reprehenderit nesciunt numquam amet pariatur. </p>
      </div> 
    );
};

export default ReviewData;