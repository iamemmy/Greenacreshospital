import React, {useState} from 'react'
import Footer from '../components/Footer'

export default function Gallery() {

  const [showGallery, setShowGallery] = useState(false);

  setTimeout(() => {
    setShowGallery(true);
  }, 1000)

  return (
    <>
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
            <iframe width="560" height="315" src="https://www.youtube.com/embed/tz3U0L62Xd8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
          <div>
            <h4>Our Theatre</h4>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/g7oIQi_gY0k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>          </div>
          <div>
            <h4>Our Laboratory</h4>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/eWZzF03YPlE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>          </div>
          <div>
            <h4>Our Labour Room</h4>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/TyvrSTDQhf8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>          </div>
          <div>
            <h4>Our MD's Office</h4>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/37PbZOuYfSc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}