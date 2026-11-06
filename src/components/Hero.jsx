import React from 'react';

export default function Hero() {
  return (
    <div className="bg-dark text-white text-center d-flex align-items-center justify-content-center px-4" style={{ minHeight: '50vh', paddingTop: '80px' }}>
      <div className="container">
        <h1 className="display-4 fw-bold mb-3">Our Latest Modern Masterpiece</h1>
        <p className="lead text-white-50 mx-auto" style={{ maxWidth: '600px' }}>
          Explore our exclusive physical and digital exhibit. 
        </p>
      </div>
    </div>
  );
}
