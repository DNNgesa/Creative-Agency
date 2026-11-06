import React from 'react';

export default function NavBar({ onToggleAdmin, searchInput, onSearchChange }) {
  return (
    <nav className="navbar navbar-dark bg-dark fixed-top shadow-sm px-4" style={{ height: '80px', zIndex: 1050 }}>
      <div className="container-fluid d-flex align-items-center justify-content-between">
        
        <div className="d-flex align-items-center" style={{ flex: '1', justifyContent: 'flex-start' }}>
          <button className="btn btn-outline-light btn-sm fw-bold" onClick={onToggleAdmin}>
            Add Product
          </button>
        </div>

        <div className="d-flex align-items-center justify-content-center" style={{ flex: '1' }}>
          <a className="navbar-brand fw-bold fs-3 text-white m-0 text-center" href="#home">
            GALLERIA CONTEMPORARIO
          </a>
        </div>

        <div className="d-flex align-items-center" style={{ flex: '1', justifyContent: 'flex-end' }}>
          <input 
            type="text" 
            className="form-control form-control-sm border-secondary text-white bg-transparent" 
            placeholder="Search art collections..." 
            style={{ maxWidth: '220px' }}
            value={searchInput}
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </div>

      </div>
    </nav>
  );
}
