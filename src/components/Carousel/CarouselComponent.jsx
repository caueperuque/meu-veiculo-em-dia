import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import celta from "../../assets/celta.jpg";
import onix from "../../assets/onix.jpg";
import mustang from "../../assets/mustang.jpg";
import fazer from "../../assets/fazer.jpg";
import biz from "../../assets/biz.jpg";
import './CarouselComponent.css';

class CustomCarousel extends Carousel {
  renderThumbs() {
    return;
  }
}

export default function CarouselComponent() {
  return (
    <div className="carousel__teste">
      <CustomCarousel infiniteLoop={true}>
      <div>
        <img src={onix} />
      </div>
      <div>
        <img src={celta} />
      </div>
      <div>
        <img src={mustang} />
      </div>
      <div>
        <img src={fazer} />
      </div>
      <div>
        <img src={biz} />
      </div>
    </CustomCarousel>
    </div>
  );
};
