import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  // async loginUser(credentials) {
  //  return fetch('http://localhost:8080/login', {
  //    method: 'POST',
  //    headers: {
  //      'Content-Type': 'application/json'
  //    },
  //    body: JSON.stringify(credentials)
  //  })
  //    .then(data => data.json())
  // }
  
  
  handleSubmit (e) {
    // hit database
    
    // set auth state
    
    // if approved redirect to MainContainer
    
    
    // export default function Login({ setToken }) {
    //   // const [username, setUserName] = useState();
    //   // const [password, setPassword] = useState();
    
    //   const handleSubmit = async e => {
    e.preventDefault();
    //     const token = await loginUser({
    //       username,
    //       password
    //     });
    //     setToken(token);
    //   }
    this.props.changeState({ loggedIn: true });
    // console.log(this.state);
    console.log('props--------', this.props)
  }
  
  
  
  render() {
    
    
    return (
      <div className="login-wrapper">
      <h1>Please Log In</h1>
      <form onSubmit={ this.handleSubmit }>
      <label>
      <p>Username</p>
      <input type="text" />
      </label>
      <label>
      <p>Password</p>
      <input type="password" />
      </label>
      <div>
      <button type="submit">Submit</button>
      </div>
      </form>
      </div>
      );
    }
  }
  
  export default Login;
  
  