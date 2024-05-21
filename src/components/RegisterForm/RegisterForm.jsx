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
        // TODO - Update Payload t
        emailAddress: emailAddress,
        firstName: firstName,
        lastName: lastName,
      },
    });
  }; // end registerUser

  return (
    <div className="formPanel-container">
      <form className="formPanel" onSubmit={registerUser}>
        <h2>Sign Up</h2>
        {errors.registrationMessage && (
          <h3 className="alert" role="alert">
            {errors.registrationMessage}
          </h3>
        )}
        <div>
          <label htmlFor="firstName">
            First Name:
            <input
              type="text"
              name="firstName"
              value={firstName}
              required
              onChange={(event) => setFirstName(event.target.value)}
            />
          </label>
        </div>
        <div>
          <label htmlFor="lastName">
            Last Name:
            <input
              type="text"
              name="lastName"
              value={lastName}
              required
              onChange={(event) => setLastName(event.target.value)}
            />
          </label>
        </div>
        <div>
          <label htmlFor="emailAddress">
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
        <div>
          <input className="btn" type="submit" name="submit" value="Sign Up" />
        </div>
      </form>
    </div>
  );
}

export default RegisterForm;
