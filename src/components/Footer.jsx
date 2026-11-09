import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-dark text-white-50 py-3 fixed-bottom border-top shadow-lg px-4" style={{ height: '60px', zIndex: 1050 }}>
      <div className="container-fluid d-flex justify-content-between align-items-center h-100">
        
        <div>
          <small className="font-monospace">
            &copy; {new Date().getFullYear()} GALLERIA CONTEMPORARIO. All rights reserved.
          </small>
        </div>

        <div className="d-flex gap-3 align-items-center fs-5">
          <a href="https://github.com/DNNgesa/Creative-Agency" target="_blank" rel="noreferrer" className="text-white-50 text-decoration-none hover-link" title="GitHub">
            <i className="bi bi-github"></i>
          </a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-white-50 text-decoration-none hover-link" title="Facebook">
            <i className="bi bi-facebook"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-white-50 text-decoration-none hover-link" title="Instagram">
            <i className="bi bi-instagram"></i>
          </a>
          <a href="https://x.com" target="_blank" rel="noreferrer" className="text-white-50 text-decoration-none hover-link" title="X (Twitter)">
            <i className="bi bi-twitter-x"></i>
          </a>
          <a href="https://youtube.com" target="_blank" rel="noreferrer" className="text-white-50 text-decoration-none hover-link" title="YouTube">
            <i className="bi bi-youtube"></i>
          </a>
        </div>

      </div>
    </footer>
  );
}
