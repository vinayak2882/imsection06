import React from 'react'



class Register extends React.Component {
  state = {
    name: "",
    email: "",
    password:"",
    username:"",
    mobile:"",
    description:"",
  };

  add = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.email === "" || this.state.password === "" || this.state.username === "" || this.state.mobile === "" || this.state.description === "") {
      alert("ALL the fields are mandatory!");
      return;
    }
    this.props.addContactHandler(this.state);
    this.setState({ name: "", email: "" });
    this.props.history.push("/");
  };
  render() {
    return (
      <div className="ui main">
        <h2>Add Details</h2>
        <form className="ui form" onSubmit={this.add}>
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={this.state.password}
              onChange={(e) => this.setState({ password: e.target.value })}
            />
          </div>
          <div className="field">
            <label>UserName</label>
            <input
              type="text"
              name="username"
              placeholder="UserName"
              value={this.state.username}
              onChange={(e) => this.setState({ username: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Mobile</label>
            <input
              type="number"
              name="mobile"
              placeholder="Mobile No"
              value={this.state.mobile}
              onChange={(e) => this.setState({ mobile: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Description</label>
            <input
              type="text"
              name="description"
              placeholder="Description"
              value={this.state.description}
              onChange={(e) => this.setState({ description: e.target.value })}
            />
          </div>
          <button className="ui button blue">Register</button>
        </form>
      </div>
    );
  }
}

export default Register;

