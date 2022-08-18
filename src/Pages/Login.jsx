

import React from 'react'



class Login extends React.Component {
  state = {
    password:"",
    username:"",
   
  };

  add = (e) => {
    e.preventDefault();
    if ( this.state.password === "" || this.state.username === "" ) {
      alert("ALL the fields are mandatory!");
      return;
    }
    this.props.addContactHandler(this.state);
    this.setState({password:"",username:"", });
    this.props.history.push("/auth/register");
  };
  render() {
    return (
      <div className="Maindiv">
        <h2>LogIn</h2>
        <form className="formdiv" onSubmit={this.add}>
          
          <div className="subdiv">
            <label>Password : </label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={this.state.password}
              onChange={(e) => this.setState({ password: e.target.value })}
            />
          </div>
          <div className="subdiv">
            <label>UserName : </label>
            <input
              type="text"
              name="username"
              placeholder="UserName"
              value={this.state.username}
              onChange={(e) => this.setState({ username: e.target.value })}
            />
          </div>
          
        
          <button className="buttondiv">Login</button>
        </form>
      </div>
    );
  }
}

export default Login;


