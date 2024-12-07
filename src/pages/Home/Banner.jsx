import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Banner = () => {
  return (
    <Carousel  autoPlay infiniteLoop >
      <div>
        <img  src="https://i.ibb.co.com/ZTLYXP3/young-reddish-man-reading-newspaper-near-old-style-building.jpg" alt="Image 1" />
       
      </div>
      <div>
        <img src="https://i.ibb.co.com/qrdn962/excited-student-always-knowing-actual-news.jpg" alt="Image 2" />
       
      </div>
      <div>
        <img src="https://i.ibb.co.com/vX7yWWn/businessman-standing-reading-newspaper.jpg" alt="Image 3"/>
        
      </div>
      <div>
        <img src="https://i.ibb.co.com/vcJqTNZ/red-haired-hipster-man-sitting-bench-with-newspaper.jpg" alt="Image 4" />
        
      </div>
      <div>
        <img src="https://i.ibb.co.com/qd1S3pL/excited-woman-with-newspaper-near-bicycle.jpg" alt="Image 5" />
        
      </div>
    </Carousel>
  );
};

export default Banner;
