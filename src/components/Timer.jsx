import React, { useEffect } from 'react';

export default function Timer({ onStatusChange }) {
  useEffect(() => {
    const checkGalleryStatus = () => {
      const now = new Date();
      const currentHour = now.getHours();
      const isOpen = currentHour >= 9 && currentHour < 17;
      
      onStatusChange(isOpen);
    };

    checkGalleryStatus();

    const statusInterval = setInterval(checkGalleryStatus, 5000);

    return () => clearInterval(statusInterval);
  }, [onStatusChange]);

  return null;
}
