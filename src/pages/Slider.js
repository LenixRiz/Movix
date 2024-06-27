import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ImageSlider.css'; // File CSS untuk styling tambahan

// Import gambar-gambar yang akan ditampilkan di slider
// import image1 from './images/avenger.jpeg';
import image2 from '../assets/jungle.jpeg';
import image3 from '../assets/toy.jpeg';
import image4 from '../assets/fight.jpeg';

const ImageSlider = () => {
  // Konfigurasi untuk react-slick
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="image-slider">
      <Slider {...settings}>
        {/* <div>
          <img src={image1} alt="Slide 1" className="slider-image" />
        </div> */}
        <div>
          <img src={image2} alt="Slide 2" className="slider-image" />
          <h1>LOST IN THE JUNGLE</h1>
        </div>
        <div>
          <img src={image3} alt="Slide 3" className="slider-image" />
          <h1 >TOY STORY</h1>
        </div>
        <div>
          <img src={image4} alt="Slide 4" className="slider-image" />
          <h1>PERTARUHAN</h1>
        </div>
      </Slider>
    </div>
  );
};

export default ImageSlider;