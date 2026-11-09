import React from 'react';

export default function NavBar({ onToggleAdmin, searchInput, onSearchChange }) {
  return (
    <nav className="navbar navbar-dark bg-dark fixed-top shadow-sm px-4" style={{ height: '80px', zIndex: 1050 }}>
      <div className="container-fluid d-flex align-items-center justify-content-between">
        
        <div className="d-flex align-items-center gap-3" style={{ flex: '1', justifyContent: 'flex-start' }}>
          <button className="btn btn-outline-light btn-sm fw-bold" onClick={onToggleAdmin}>
            Add Product
          </button>
          <span className="text-success small d-none d-lg-inline-block fw-semibold font-monospace animate-pulse">
            ● Gallery Open
          </span>
        </div>

        <div className="d-flex align-items-center justify-content-center" style={{ flex: '1' }}>
          <a className="navbar-brand fw-bold fs-3 text-white m-0 text-center tracking-wider text-uppercase" href="#home">
            GALLERIA CONTEMPORARIO
          </a>
        </div>

        <div className="d-flex align-items-center gap-3" style={{ flex: '1', justifyContent: 'flex-end' }}>
          <div className="d-none d-md-flex gap-2 me-2">
            <a href="#about" className="text-white-50 text-decoration-none small hover-link">About</a>
          </div>

          <input 
            type="text" 
            className="form-control form-control-sm border-secondary text-white bg-transparent rounded-pill px-3" 
            placeholder="Search art collections..." 
            style={{ maxWidth: '180px' }}
            value={searchInput}
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </div>

      </div>
    </nav>
  );
}
