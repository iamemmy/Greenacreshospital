import React, {useState, useEffect} from 'react'
import Footer from '../components/Footer';
import Slides from '../components/Slides';
import Mobileslide from '../components/Mobileslide';

export default function Gallery() {

  const [showGallery, setShowGallery] = useState(false);

  setTimeout(() => {
    setShowGallery(true);
  }, 1000)

  useEffect(() => {
    window.scroll(1, 0);
  }, []);

  return (
    <React.Fragment>
      <div className={showGallery ? 'gallery' : 'gallery delayPage'}>
        <div className='gallery-top'>
          <h3>Let us show you around </h3>
          <p>
            At Green Acres Hospital ​, we pride ourselves on providing exceptional service to our patient. 
            From check-in to check-out, our dedicated team is here to make sure you have a good experience 
            whenever you visit our hospital, we are passionate about our patients. Below are some views of 
            what you’d be expecting whenever you visit us
          </p>
        </div>
        <div className='gallery-bottom'>
          <div>
            <h4>Our Compound and Reception</h4>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/qKQs9bcLhQ4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
          <div>
            <h4>Our Theatre</h4>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/BBk8-YGXz0E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
          <div>
            <h4>Our Consulting Room</h4>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/BgdzMfZ7CK8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
          <div>
            <h4>Our Laboratory</h4>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/L-e_jlL3stY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
          <div>
            <h4>Our Labour Ward</h4>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/qB50jSyBfN0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        </div>
      </div>
      <Mobileslide />
      <Slides />
      <Footer />
    </React.Fragment>
  )
}