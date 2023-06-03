import React from 'react'

export default function Services() {
  return (
    <>
        {/* services area */}
        <section className='service-page'>
          <h1>
              OUR SERVICES
          </h1>
          <p>
              At Green Acres Hospital, we pride ourselves on providing exceptional service to out patient. From check-in to check-out, our dedicated team is here to make sure you have a great experience whenever you visit our hospital, we are passionate about our patient.
          </p>
            <article className="card-wrapper">
                <div className='card' >
                    <img src="src/assets/img5.png" alt="ultrasound">
                    </img>
                    <div>
                        <h4>
                            3D/4D ULTRASOUND SCAN
                        </h4>
                        <p  className='card-text'>
                            Like regular ultrasounds, 3D and 4D ultrasounds use sound waves to create an image of your baby in your womb. What's different is that 3D ultrasounds create a three-dimensional image of your baby, while 4D ultrasounds create a live video effect, like a movie. You can watch your baby smile or yawn.
                        </p>
                    </div>
              </div>
              <div className="card">
                      <img src='src/assets/img1.png' alt='laboratory'>
                      </img>
                    <div>
                        <h4>
                            LABORATORY SERVICES
                        </h4>
                        <p className="card-text">
                            Our laboratory facility is second to none with state of the art equipment and qualified scientists. The laboratory performs tests using specimen derived from humans to provide information for diagnosis, prevention or treatment of or impairment of disease, or for assessment of health.
                        </p>
                        {/* <p>
                        we offer a laboratory facility that performs laboratory testing on specimens derived from humans to provide information for diagnosis, prevention or treatment of or impairment of disease, or for assessment of health.
                        </p> */}
                    </div>
              </div>
              <div className="card">
                    <img src='src/assets/img3.png' alt="gopd">
                    </img>
                    <div>
                        <h4>
                            MULTISPECIALTY CLINIC
                        </h4>
                        <p className="card-text">
                            We offer a thorough physical examination including; vital signs,consultation with the finest Medical Doctors,variety of tests depending on the age, gender, and health of the person.    
                        </p>
                    </div>
                </div>
              <div className="card">
                    <img src='src/assets/img4.png'>
                    </img>
                    <div>
                        <h4>
                            OBSTERTRICS AND GYNAECARE CLINIC SERVICE
                        </h4>
                        <p className="card-text">
                            The care of during pregnancy and childbirth and in the diagnosis of diseases of the female reproductive organs requires expert's examination and we prioritize on that.We also specialize in other women's health issues such as: menopause, hormone problems, contraception, and infertility.
                        </p>
                    </div>
                </div>
            </article>
        </section>
    </>
  )
}
