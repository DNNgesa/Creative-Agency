import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-dark text-white-50 text-center py-3 fixed-bottom border-top" style={{ height: '60px', zIndex: 1050 }}>
      <div className="container">
        <small>&copy; {new Date().getFullYear()} GALLERIA CONTEMPORARIO. All rights reserved.</small>
      </div>
    </footer>
  );
}
