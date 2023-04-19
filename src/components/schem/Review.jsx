import Carousel from 'react-bootstrap/Carousel';
import ReviewData from '../layout/ReviewData';

function DarkVariantExample() {
  return (
    <div className="my-5">
      <Carousel variant="dark" className='py-5'>
      <Carousel.Item>
          <div>
            <div className="row justify-content-center align-items-center gap-3">
             <ReviewData />           
             <ReviewData />           
             <ReviewData />           
            </div>
            <p></p>
          </div>
      </Carousel.Item>
      <Carousel.Item>
          <div>
            <div className="row justify-content-center align-items-center gap-3">
             <ReviewData />           
             <ReviewData />           
             <ReviewData />           
            </div>
            <p></p>
          </div>
      </Carousel.Item>
      <Carousel.Item>
          <div>
            <div className="row justify-content-center align-items-center gap-3">
             <ReviewData />           
             <ReviewData />           
             <ReviewData />           
            </div>
            <p></p>
          </div>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default DarkVariantExample;


