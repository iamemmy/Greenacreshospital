import React, {useEffect} from 'react'
import Footer from '../components/Footer'

export default function Hmo() {

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <React.Fragment>
      <div className='hmo-modal'>
          <h3>HMO LIST</h3>
          <p>
              At Green Acres Hospital ​, we pride ourselves on providing exceptional service to our patient. 
              From check-in to check-out, our dedicated team is here to make sure you have a good experience 
              whenever you visit our hospital, we are passionate about our patients. 
              we are HMO Accredited, Below is the list of the HMOs in our Hospital
          </p>
          <div>
              <p>Axamansard</p>
              <p>Reliance</p>
              <p>Total Health Trust</p>
              <p>Venus</p>
              <p>Hygeia</p>
              <p>Bastion</p>
              <p>NNPC</p>
              <p>DOT</p>
              <p>Hallmark</p>
              <p>Kennedia</p>
              <p>Leadway</p>
              <p>MB & O</p>
              <p>Miteral</p>
              <p>NEM HEALTH</p>
              <p>PROHEALTH</p>
              <p>ECOWAS COMMISSION</p>
              <p>ECOWAS COURT OF JUSTICE</p>
          </div>
      </div>
      <Footer />
    </React.Fragment>
  )
}
