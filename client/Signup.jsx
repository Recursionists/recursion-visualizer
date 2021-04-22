import React, { useState, useEffect } from 'react';

const Signup = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameInput, setUsernameInput] = useState(false);

  const signupUser = (e) => {
    e.preventDefault();

    const body = { username, password };

    fetch('/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/JSON',
      },
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div className='signup-wrapper'>
      <h1>Please Sign Up</h1>
      <form>
        <label>
          <p>Choose username</p>
          {/* {!username && usernameInput ? <p>required</p> : null} */}
          <input
            type='text'
            onClick={(e) => {
              setUsernameInput(true);
              console.log(usernameInput);
            }}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            value={username}
          />
        </label>
        <label>
          <p>Choose password</p>
          <input
            type='password'
            onChange={(e) => {
              setPassword(e.target.value);
              console.log(password);
            }}
            value={password}
          />
        </label>
        <div>
          <button type='submit' onClick={(e) => signupUser(e)}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
