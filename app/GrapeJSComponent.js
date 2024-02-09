import React, { useEffect } from 'react';
import grapesjs from 'grapesjs';

const GrapeJSComponent = () => {
  useEffect(() => {
    // Load GrapeJS initialization script dynamically
    const script = document.createElement('script');
    script.src = './grapeJsInit.js'; // Adjust the path accordingly
    script.async = true;
    document.body.appendChild(script);

    // Cleanup on component unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []); // Run once on component mount

  return <div id="gjs"></div>; // Container for GrapeJS editor
};

export default GrapeJSComponent;