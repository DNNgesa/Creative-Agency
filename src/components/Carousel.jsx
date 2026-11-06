import React, { useEffect, useRef } from 'react';

export default function Carousel({ products }) {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    if (products.length === 0 || !scrollContainerRef.current) return;

    const container = scrollContainerRef.current;

    const autoSlideTimer = setInterval(() => {
      const cardStepWidth = 320; 

      if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 20) {
        container.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        container.scrollBy({ left: cardStepWidth, behavior: 'smooth' });
      }
    }, 3000); 

    return () => clearInterval(autoSlideTimer);
  }, [products]);

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
      
      <div 
        ref={scrollContainerRef}
        className="d-flex flex-row flex-nowrap overflow-hidden g-4 pb-3" 
        style={{ scrollSnapType: 'x mandatory', gap: '20px' }}
      >
        {products.map((item) => (

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
