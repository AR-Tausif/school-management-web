import React from 'react';
import { Button, Container } from 'react-bootstrap';
const Membership = () => {
    return (
        <div className="bg-light py-5">
            <Container>
                <div className="d-flex  justify-content-between align-items-center py-5">
                    <div className="col-6">
                        <h2 className="fs-1 fw-bold">We Have The Best Instructors Available in The City</h2>
                        <p className="fs-5 mt-3">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique</p>
                        <ul className="fs-5 fw-semibold">
                            <li className="nav-items">Full Lifetime Access</li>
                            <li className="nav-items">20+ Downloadable Resources</li>
                            <li className="nav-items">Certificate Of Completion</li>
                            <li className="nav-items">Free Trial 7 Days</li>
                        </ul>
                        <Button variant="outline-success" className="p-3 fs-5">Enrolled Now</Button>
                    </div>
                        <img src="https://demoapus1.com/skillup/wp-content/uploads/2022/04/lmp-2.png" className="img-fluid" />
                </div>
                <div className="d-flex justify-content-between align-items-center py-5">
                    <img src="https://demoapus1.com/skillup/wp-content/uploads/2022/04/lmp-1.png" alt="" />
                    <div className="col-5">
                        <div className=" d-flex align-items-center gap-4">
                            <h5 className="p-4 bg-success rounded-circle text-white" style={{width: '20px', height: '20px'}}>1</h5>
                            <div>
                                <h2>Create Account</h2>
                                <p>Oluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.</p>
                            </div>
                        </div>
                        <div className=" d-flex align-items-center gap-4">
                            <h5 className="p-4 bg-success rounded-circle text-white" style={{width: '20px', height: '20px'}}>1</h5>
                            <div>
                                <h2>Create Account</h2>
                                <p>Oluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.</p>
                            </div>
                        </div>
                        <div className=" d-flex align-items-center gap-4">
                            <h5 className="p-4 bg-success rounded-circle text-white" style={{width: '20px', height: '20px'}}>1</h5>
                            <div>
                                <h2>Create Account</h2>
                                <p>Oluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.</p>
                            </div>
                        </div>
                        <div className=" d-flex align-items-center gap-4">
                            <h5 className="p-4 bg-success rounded-circle text-white" style={{width: '20px', height: '20px'}}>1</h5>
                            <div>
                                <h2>Create Account</h2>
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