import React from 'react';
import school from '../assets/images/school.png';

function Footer() {
  return (
    <div className="container-fluid px-3 py-3" style={{ backgroundColor: "#e3f2fd" }}>
      <div className="row align-items-center">
        {/* Image Section */}
        <div className="col-md-4 col-12 text-center mb-3 mb-md-0">
          <img
            src={school}
            alt="School"
            className="img-fluid rounded"
            style={{
              maxHeight: "200px",
              border: "2px solid #ff1493",
              borderRadius: "2px",
              backgroundColor: "#e3f2fd"
            }}
          />
        </div>

        {/* Text Section */}
        <div className="col-md-8 col-12 text-center text-md-start">
          <h4 style={{ color: "#003366" }}>Creative English School</h4>
          <p style={{ color: "#003366", marginBottom: "0.5rem" }}>
            Near Gulli Wala Masjid, Opp. Shital Motors, Sarkhej, Ahmedabad, Gujarat.
          </p>
          <p className="text-muted small mb-0">
            NIDANAAZ SHAIKH | nidashaikh0411@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
