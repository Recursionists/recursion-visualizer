import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usernameSubmit: '',
      passwordSubmit: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.formChange = this.formChange.bind(this)

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
  componentDidMount() {}
  
  handleSubmit (e) {
    // hit database
    console.log(e)
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

  formChange(e){
    console.log("e: ", e)
    console.log("e.value", e.target.value)
    this.setState({usernameSubmit: e.target.value})
  }
  
  
  
  render() {
    
    return (
      <div className="login-wrapper">
      <h1>Please Log In</h1>
      <form onSubmit={ this.handleSubmit }>
      <label>
      <p>Username</p>
      <input type="text" placeholder="Enter Name Here" onChange={e=>{this.formChange(e)}}/>
      </label>
      <label>
      <p>Password</p>
      <input type="password" onChange={e=>{this.formChange(e)}}/>
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
  
  