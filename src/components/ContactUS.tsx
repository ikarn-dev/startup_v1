import React from 'react';

function ContactUS() {
  return (
    <div className='bg-black mt-5 mb-5' style={{ width: '100%', height: '250px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <h1 className='text-xl' style={{ textAlign: 'center' }}>Get in Touch</h1>
      <button 
        style={{ 
          marginTop: '20px', 
          backgroundColor: '#A2F97D', 
          color: 'black', 
          padding: '10px 20px', 
          border: 'none', 
          borderRadius: '15px', 
          cursor: 'pointer' 
        }}
      >
        Contact Us
      </button>
    </div>
  );
}

export default ContactUS;
