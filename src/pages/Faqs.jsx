import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Footer from '../components/Footer';

const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleAccordionClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

    useEffect(() => {
        window.scroll(1, 0);
    }, []);

  const renderAccordionItem = (index, title, content) => {
    const isActive = activeIndex === index;
    const accordionClass = isActive ? 'accordion-item active' : 'accordion-item';

    return (
      <div className={accordionClass} key={index}>
        <h2 className="accordion-header">
          <button
            className="accordion-button"
            type="button"
            onClick={() => handleAccordionClick(index)}
          >
            {title}
          </button>
        </h2>
        {isActive && (
          <div className="accordion-collapse">
            <div className="accordion-body">{content}</div>
          </div>
        )}
      </div>
    );
  };

  return (
    <React.Fragment>
        <div className="accordion" id="accordionExample">
        {renderAccordionItem(0, 'Is Green Acres Hospital HMO accredited?', 'We are HMO Accredited, Below is the list of the HMOs in our Hospital: Reliance, Venus, Hygeia, Bastion, Kennedia, Leadway,MB & O, Pro-wealth')}
        {renderAccordionItem(1, 'Where is Green Acres Hospital located?', 'Green Acres Hospital is located in Sunnyvale Homes Estate, Lokogoma, Abuja.')}
        {renderAccordionItem(2, 'What services do you offer?', 'Green Acres Hospital offer premium services including but not limited to 3D/4D Ultrasound Scan service, laboratory services, Gynaecare clinic service, multi-specialty clinic, surgery and cervical cancer screening.')}
        {renderAccordionItem(3, 'How do I book an appointment', 'To book an appointment with us, kindly click on the BOOK APPOINTMENT button at the header of this website.')}
        </div>
        <Footer />
    </React.Fragment>
  );
};

export default Faqs;