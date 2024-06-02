import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './_RegisterForm.scss';

function RegisterForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const errors = useSelector((store) => store.errors);
  const dispatch = useDispatch();

  const registerUser = (event) => {
    event.preventDefault();

    dispatch({
      type: 'REGISTER',
      payload: {
        username: username,
        password: password,
        email_address: emailAddress,
        firstname: firstName,
        lastname: lastName,
      },
    });
  }; // end registerUser

  return (
    <div className="formPanel-container">
      <form className="formPanel" onSubmit={registerUser}>
        <h2 style={{ width: '100%' }}>Sign Up</h2>
        {errors.registrationMessage && (
          <h3 className="alert" role="alert">
            {errors.registrationMessage}
          </h3>
        )}
        <div>
          <label htmlFor="firstname">
            First Name:
            <input
              type="text"
              name="firstname"
              value={firstName}
              required
              onChange={(event) => setFirstName(event.target.value)}
            />
          </label>
        </div>
        <div>
          <label htmlFor="lastname">
            Last Name:
            <input
              type="text"
              name="lastname"
              value={lastName}
              required
              onChange={(event) => setLastName(event.target.value)}
            />
          </label>
        </div>
        <div>
          <label htmlFor="email_address">
            Email:
            <input
              type="text"
              name="emailAddress"
              value={emailAddress}
              required
              onChange={(event) => setEmailAddress(event.target.value)}
            />
          </label>
        </div>
        <div>
          <label htmlFor="username">
            Username:
            <input
              type="text"
              name="username"
              value={username}
              required
              onChange={(event) => setUsername(event.target.value)}
            />
          </label>
        </div>
        <div>
          <label htmlFor="password">
            Password:
            <input
              type="password"
              name="password"
              value={password}
              required
              onChange={(event) => setPassword(event.target.value)}
            />
          </label>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <input className="btn" type="submit" name="submit" value="Sign Up" />
        </div>
      </form>
    </div>
  );
}

export default RegisterForm;
