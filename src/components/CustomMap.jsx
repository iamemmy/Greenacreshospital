import React from 'react';

function CustomMap() {
  return (
    <div>
      <iframe
        title="Google Map"
        width="100%"
        height="400"
        frameBorder="0"
        style={{ border: 0 }}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.861475410822!2d7.44377487413526!3d8.984892089679677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0cd701bb6b15%3A0xbea09bffd4c3b0df!2sGreen%20Acres%20Hospital!5e0!3m2!1sen!2sng!4v1689932708586!5m2!1sen!2sng"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default CustomMap;