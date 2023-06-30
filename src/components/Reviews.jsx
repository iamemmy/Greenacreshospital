import React from "react";
import test1 from "../assets/review.jpg";
import test2 from "../assets/review.jpg";
import test3 from "../assets/review.jpg";
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
        "The multiuniquiness of staff. All your staff work effortlessly and in synchrony to make me comfortable while I was at your facility. ",
      author: "A. A. Aliu",
      image: test1,
    },
    {
      id: 2,
      description:
        "Customer service is superb. Always someone present to answer the phone in well detailed and comforting manner. ",
      author: "Igbokwe",
      image: test2,
    },
    {
      id: 3,
      description:
        "The staffs are well mannered, also the welcome is friendly. Also I like their approach to emergency. ",
      author: "Agunloye Ayodele",
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