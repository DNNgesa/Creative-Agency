import React from 'react';

export default function Hero({ products, onViewExhibition }) { 
  if (!products || products.length === 0) {
    return (
      <div className="bg-dark text-white text-center d-flex align-items-center justify-content-center" style={{ minHeight: '50vh', paddingTop: '80px' }}>
        <h1 className="h3 text-muted">No exhibition currently active.</h1>
      </div>
    );
  }

  const latestMasterpiece = products[products.length - 1];

  return (
    <div 
      className="hero-section text-white d-flex align-items-center position-relative shadow" 
      style={{ 
        minHeight: '60vh', 
        paddingTop: '80px',
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.75)), url("${latestMasterpiece.image}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        transition: 'background-image 0.5s ease-in-out' 
      }}
    >
      <div className="container p-5 position-relative" style={{ zIndex: 2 }}>
        <div className="col-12 col-md-8 col-lg-6 text-start">
          
          <span className="badge bg-primary text-uppercase tracking-wider px-3 py-2 mb-3 fw-bold shadow-sm">
            Our Latest Masterpiece
          </span>
          
          <h1 className="display-3 fw-black mb-2 lh-1 text-white">{latestMasterpiece.title}</h1>
          <h5 className="h4 text-white-50 mb-3 fst-italic">By {latestMasterpiece.artist} ({latestMasterpiece.year})</h5>
          <p className="lead text-white-50 mb-4 small text-wrap text-break" style={{ maxWidth: '500px' }}>
            {latestMasterpiece.description}
          </p>
          
          <button 
            type="button" 
            className="btn btn-outline-light px-4 py-2 fw-bold text-uppercase tracking-wide rounded-0"
            onClick={onViewExhibition}
          >
            View Full Exhibition
          </button>

        </div>
      </div>
    </div>
  );
}
