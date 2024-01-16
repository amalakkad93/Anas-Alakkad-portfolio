import React from 'react';

const SquareCanvas = ({ icon }) => {
  return (
    <div style={{
      height: '4rem',
      width: '4rem',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      border: '1px solid #ccc',
      borderRadius: '10px'
    }}>
    <img src={icon} alt="Technology Icon" style={{ maxHeight: '100%', maxWidth: '100%' }} />
    </div>
    );
    };

    export default SquareCanvas;
