import React, { useState } from 'react';

import './index.scss';

const Ssignup = () => {
  
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [location, setLocation] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    sendForm();
  };

  const sendForm = () => {
    // You can use this function to send the form data via emailjs
  };

  return (
    <div className="container dsignup-page">
      <div className="text-reg">
        <h1>Signup</h1>
      </div>

      <div className="form-container">
        <form onSubmit={handleSubmit}>
          
          <div className="form-field">
            <input
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Name"
            />
          </div>
          <div className="form-field">
            <input
              type="text"
              value={contact}
              onChange={(event) => setContact(event.target.value)}
              placeholder="Contact details"
            />
          </div>
          <div className="form-field">
            <input
              type="text"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Email"
            />
          </div>
          <div className="form-field">
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Password"
            />
          </div>
          <div className="form-field">
            <input
              type="text"
              value={location}
              onChange={(event) => setLocation(event.target.value)}
              placeholder="Location"
            />
          </div>

          <div className="form-field">
            <input
              type="text"
              value={time}
              onChange={(event) => setTime(event.target.value)}
              placeholder="Time of work"
            />
          </div>
      
          <button type="submit" className="form-button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Ssignup;
