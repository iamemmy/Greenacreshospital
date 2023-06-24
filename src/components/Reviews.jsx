import React from "react";
import test1 from "../assets/img1.png";
import test2 from "../assets/img1.png";
import test3 from "../assets/img1.png";
import quote from "../assets/quote.png";
import '../reviews.css';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Testimonial() {
  const prevArrow = ()=>{
    return (
    <button className="arrows-testimonial prevArrow">
      &lt;
      </button> 
    )
  }
  const settings = {
    dots: true,
    infinite: true,
    lazyLoad: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };


  const reviews = [
    {
      id: 1,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis facilis obcaecati ducimus sint, in maiores corrupti earum nostrum voluptatum quis? sit amet consectetur adipisicing elit. Officiis facilis obcaecati ",
      author: "Johnny Anderson",
      image: test1,
    },
    {
      id: 2,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis facilis obcaecati ducimus sint, in maiores corrupti earum nostrum voluptatum quis? sit amet consectetur adipisicing elit. Officiis facilis obcaecati ",
      author: "Mary Anderson",
      image: test2,
    },
    {
      id: 3,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis facilis obcaecati ducimus sint, in maiores corrupti earum nostrum voluptatum quis? sit amet consectetur adipisicing elit. Officiis facilis obcaecati ",
      author: "Samuel Anderson",
      image: test3,
    },
  ];

  return (
    <section className="testimonial-cover">
      <h3>Testionials</h3>
    <Slider {...settings}>
      {reviews.map((item, index) => (
        <div className="testimonial-wrapper">
          <div className="each-testimonial" key={index}>
            <div className="testimonial-author">
              <img src={item.image} alt="" />
            </div>
            <div className="testimonial-text">
              <img src={quote} alt="" />
              <div>
                <p className="description">{item.description}</p>
                <p className="author-name">{item.author}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
    </section>
    
  );
}