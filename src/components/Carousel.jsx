import React, { useEffect, useRef } from 'react';

export default function Carousel({ products }) {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    // If there are no products or the reference is empty, stop execution early
    if (products.length === 0 || !scrollContainerRef.current) return;

    const container = scrollContainerRef.current;

    const autoSlideTimer = setInterval(() => {
      // Define individual card step calculation width matching our item card bounds below
      const cardStepWidth = 320; 

      // If we reach the end of the catalog track row, rewind back to index 0 smoothly
      if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 20) {
        container.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        // Move horizontal layout rightward by exactly one card width step
        container.scrollBy({ left: cardStepWidth, behavior: 'smooth' });
      }
    }, 3000); // ⏱️ TIMER CONSTRAINT: Shifts focus step every 3 seconds

    return () => clearInterval(autoSlideTimer);
  }, [products]);

  // Manual Arrow Click Handlers
  const handleScrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const handleScrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  if (products.length === 0) {
    return <p className="text-muted text-center py-5">No art pieces match your criteria.</p>;
  }

  return (
    <div className="container my-5" style={{ marginBottom: '120px' }}>
      <div className="d-flex justify-content-between align-items-center mb-4 border-bottom pb-2">
        <h3 className="fw-bold text-dark m-0">GALLERY</h3>
        
        {/* Custom Navigation Indicator Arrows */}
        <div className="d-flex gap-2">
          <button 
            type="button" 
            className="btn btn-dark rounded-circle d-flex align-items-center justify-content-center"
            style={{ width: '36px', height: '36px' }}
            onClick={handleScrollLeft}
          >
            ←
          </button>
          <button 
            type="button" 
            className="btn btn-dark rounded-circle d-flex align-items-center justify-content-center"
            style={{ width: '36px', height: '36px' }}
            onClick={handleScrollRight}
          >
            →
          </button>
        </div>
      </div>
      
      {/* 
        CRITICAL FIX: 
        1. 'd-flex flex-row flex-nowrap' forces items onto a single left-to-right line timeline.
        2. 'overflow-hidden' completely hides the native browser scrollbars.
      */}
      <div 
        ref={scrollContainerRef}
        className="d-flex flex-row flex-nowrap overflow-hidden g-4 pb-3" 
        style={{ scrollSnapType: 'x mandatory', gap: '20px' }}
      >
        {products.map((item) => (
          /* 
            CRITICAL FIX: 
            'flex: 0 0 auto' locks card widths into an explicit 300px box width constraint,
            preventing Bootstrap from stretching them or wrapping them vertically!
          */
          <div 
            key={item.id} 
            style={{ flex: '0 0 300px', scrollSnapAlign: 'start' }}
          >
            <div className="card h-100 shadow-sm border rounded-3 overflow-hidden bg-white">
              <img src={item.image} className="card-img-top" alt={item.title} style={{ height: '220px', objectFit: 'cover' }} />
              <div className="card-body d-flex flex-column justify-content-between p-3">
                <div>
                  <h5 className="card-title fw-bold text-dark text-truncate mb-1">{item.title}</h5>
                  <div className="d-flex justify-content-between text-muted small mb-2">
                    <span>By {item.artist}</span>
                    <span className="badge bg-secondary rounded-pill">{item.year}</span>
                  </div>
                  <p className="card-text text-muted small text-break m-0">{item.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
