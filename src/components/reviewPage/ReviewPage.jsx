import React from 'react';
import HeadTitle from '../utilities/HeadTitle';
import { Container } from 'react-bootstrap';
import IndividualIntervalsExample from '../schem/Review';

const ReviewPage = () => {
    return (
        <div className="py-5">
            <HeadTitle title="Our Students" dText="Reviews"/>
            <Container>
                <IndividualIntervalsExample/>
            </Container>
        </div>
    );
};

export default ReviewPage;