import React, { useState, useEffect } from 'react';

const Paragraph1 = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [showFull, setShowFull] = useState(false);
  const maxLength = 200;



  const toggleShowFull = () => {
    setShowFull(!showFull);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
    };

    handleResize(); // Initial check

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const text = `
    Dr. Yinka Olaniyan is an Obstetrician and Gynaecologist. He is currently MD/CEO of Green Acres 
    Hospital & Gynaecare Clinic in Abuja. He is also visiting consultant at National Hospital Abuja.
    Dr. Olaniyan, among other things, received his basic medical degree (MBBS) from the University of 
    Lagos in 1983 and obtained a postgraduate fellowship from the West African College of Surgeons 
    (FWACS Obstetrics & Gynaecology) in 1998. He also holds a Post-Graduate Diploma in Reproductive 
    Medicine and Biology from the University of Geneva (2000). He undertook a Basic Colposcopy Training 
    at the Geneva University Hospital.
  `;

  const text2 = `
    He is passionate about cancer prevention in belief that prevention 
    holds the key to eradication of cancer especially in developing countries. His research interests 
    focus on identifying the determinants in the aetiology of cervical cancer and development of its 
    screening modalities.
  `;

  return (
    <div className='paragraph1'>
      <p>
        {isMobile ? (
          <>
            {showFull ? text : `${text.slice(0, maxLength)}...`}
            <br />
            {showFull ? text2 : ''}
            <br />
            <h5 onClick={toggleShowFull}>
                {showFull ? 'Show less ' : 'Show more'}
            </h5>
          </>
        ) : (
          <>
            {text}
            <br />
            <br />
            {text2}
          </>
        )}
      </p>
    </div>
  );
};

export default Paragraph1;