import React from 'react';

export default function Carousel({ products }) {
  if (products.length === 0) {
    return <p className="text-muted text-center py-5">No art pieces match your criteria.</p>;
  }

  return (
    <div className="container my-5">
      <h3 className="fw-bold mb-4 text-dark border-bottom pb-2">GALLERY</h3>
      <div className="row flex-row flex-nowrap overflow-auto g-4 pb-3" style={{ scrollbarWidth: 'thin' }}>
        {products.map((item) => (
          <div key={item.id} className="col-12 col-sm-6 col-md-4 col-lg-3" style={{ flex: '0 0 auto' }}>
            <div className="card h-100 shadow-sm border rounded-3 overflow-hidden bg-white">
              <img src={item.image} className="card-img-top" alt={item.title} style={{ height: '240px', objectFit: 'cover' }} />
              <div className="card-body d-flex flex-column justify-content-between p-3">
                <div>
                  <h5 className="card-title fw-bold text-dark text-truncate mb-1">{item.title}</h5>
                  <div className="d-flex justify-content-between text-muted small mb-2">
                    <span>By {item.artist}</span>
                    <span className="badge bg-secondary rounded-pill">{item.year}</span>
                  </div>
                  <p className="card-text text-muted small text-break">{item.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
