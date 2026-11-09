import React from 'react';

export default function NavBar({ onToggleAdmin, searchInput, onSearchChange, isGalleryOpen }) {
  return (
    <nav className="navbar navbar-dark bg-dark fixed-top shadow-sm px-4" style={{ height: '80px', zIndex: 1050 }}>
      <div className="container-fluid d-flex align-items-center justify-content-between">
        
        <div className="d-flex align-items-center gap-3" style={{ flex: '1', justifyContent: 'flex-start' }}>
          <button className="btn btn-outline-light btn-sm fw-bold" onClick={onToggleAdmin}>
            Add Product
          </button>
          <span className={`small d-none d-lg-inline-block fw-semibold font-monospace ${isGalleryOpen ? 'text-success animate-pulse' : 'text-danger'}`}>
            {isGalleryOpen ? '● Gallery Open' : '○ Gallery Closed'}
          </span>
        </div>

        <div className="d-flex align-items-center justify-content-center" style={{ flex: '1' }}>
          <a className="navbar-brand fw-bold fs-3 text-white m-0 text-center tracking-wider text-uppercase" href="#home">
            GALLERIA CONTEMPORARIO
          </a>
        </div>

        <div className="d-flex align-items-center gap-3" style={{ flex: '1', justifyContent: 'flex-end' }}>
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
