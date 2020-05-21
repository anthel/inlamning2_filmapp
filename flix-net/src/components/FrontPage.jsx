import React from 'react';
import { Carousel } from 'antd';
import 'antd/dist/antd.css';
import AddWatchListBtn from './AddWatchListBtn/AddWatchListBtn';

export default function FrontPage() {
  
  
  return (
    <React.Fragment>
      <AddWatchListBtn />
   <Carousel autoplay>
        <div>
          <h3>Suggestion 1</h3>
        </div>
        <div>
          <h3>Suggestion 2</h3>
        </div>
        <div>
          <h3>Suggestion 3</h3>
        </div>
        <div>
          <h3>Suggestion 4</h3>
        </div>
      </Carousel>
    </React.Fragment>
  )
}

//SLIDER FRÅN REACT SLICK
// import Slider from "react-slick";

// export default class SimpleSlider extends Component {
//   render() {
//     const settings = {
//       dots: true,
//       infinite: true,
//       speed: 500,
//       slidesToShow: 1,
//       slidesToScroll: 1
//     };
//     return (
//       <div>
//         <h2> Single Item</h2>
//         <Slider {...settings}>
//           <div>
//             <h3>1</h3>
//           </div>
//           <div>
//             <h3>2</h3>
//           </div>
//           <div>
//             <h3>3</h3>
//           </div>
//           <div>
//             <h3>4</h3>
//           </div>
//           <div>
//             <h3>5</h3>
//           </div>
//           <div>
//             <h3>6</h3>
//           </div>
//         </Slider>
//       </div>
//     );
//   }


