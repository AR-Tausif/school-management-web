import React from 'react';
import { Container } from 'react-bootstrap';
import Button from '../utilities/Button';
const Membership = () => {
    return (
        <div className="bg-white py-5">
            <Container>
                <div className="d-flex  justify-content-between align-items-center py-5">
                    <div className="col-6">
                        <h2 className="fs-2 fw-bold">We Have The Best Instructors Available in The City</h2>
                        <p className="mt-3">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique</p>
                        <ul className="fw-semibold navbar-nav py-3 pb-4">
                            <li className="nav-items">
                               <i className="bi bi-check-circle-fill text-success fw-bold fs-4 mx-3 py-3"></i>
                                Full Lifetime Access
                            </li>
                            <li className="nav-items"> <i className="bi bi-check-circle-fill text-success fw-bold fs-4 mx-3 py-3"></i>20+ Downloadable Resources</li>
                            <li className="nav-items"> <i className="bi bi-check-circle-fill text-success fw-bold fs-4 mx-3 py-3"></i>Certificate Of Completion</li>
                            <li className="nav-items"> <i className="bi bi-check-circle-fill text-success fw-bold fs-4 mx-3 py-3"></i>Free Trial 7 Days</li>
                        </ul>
                        <Button className="p-3 fs-6" textdata="Enroll Now" />
                    </div>
                        <img src="https://demoapus1.com/skillup/wp-content/uploads/2022/04/lmp-2.png" className="img-fluid" />
                </div>
                <div className="d-flex justify-content-between align-items-center py-5">
                    <img src="https://demoapus1.com/skillup/wp-content/uploads/2022/04/lmp-1.png" alt="" />
                    <div className="col-5">
                        <div className=" d-flex gap-4">
                        <i className="bi bi-1-circle-fill text-success fs-1"></i>
                            <div>
                                <h4 className="fw-semibold">Create Account</h4>
                                <p>Oluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.</p>
                            </div>
                        </div>
                        <div className=" d-flex gap-4 mt-2">
                        <i className="bi bi-2-circle-fill text-success fs-1"></i>

                            <div>
                                <h4 className="fw-semibold">Join Membership</h4>
                                <p>Oluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.</p>
                            </div>
                        </div>
                        <div className=" d-flex gap-4  mt-2">
                            <i className="bi bi-3-circle-fill text-success fs-1"></i>
                            <div>
                                <h4 className="fw-semibold">Start Learning</h4>
                                <p>Oluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.</p>
                            </div>
                        </div>
                        <div className=" d-flex gap-4 mt-2">
                        <i className="bi bi-4-circle-fill text-success fs-1"></i>

                            <div>
                                <h4 className="fw-semibold">Get Certificate</h4>
                                <p>Oluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Membership;