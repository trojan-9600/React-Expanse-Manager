import React, { Component } from "react";
import { Button, TextField } from "@material-ui/core";
import "./Home.css";
import axios from "axios";
//import { Redirect } from "react-router";

export default class Adduser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      users: [],
      // redirect: false,
    };
    this.nameChange = this.nameChange.bind(this);
    this.emailChange = this.emailChange.bind(this);
    this.OnSubmit = this.OnSubmit.bind(this);
  }

  nameChange(e) {
    this.setState({
      name: e.target.value,
    });
  }
  emailChange(e) {
    this.setState({
      email: e.target.value,
    });
  }
  OnSubmit(e) {
    e.preventDefault();
    e.persist();
    const object = {
      name: this.state.name,
      email: this.state.email,
    };

    axios
      .post("http://localhost/expanse_manager/insert.php", object)
      .then((res) => {
        this.setState({
          // redirect: true,
        });
      });
    this.props.fetchuserarray(this.state.users);
    this.setState({
      name: "",
      email: "",
    });
  }
  render() {
    // const { redirect } = this.state;
    // if (redirect) {
    //   return <Redirect to="/home" />;
    // }
    return (
      <div className="userForm">
        <center>
          <form onSubmit={this.OnSubmit}>
            <h2>AddUser</h2>
            <TextField
              id="standard-basic"
              style={{ padding: 5 }}
              onChange={this.nameChange}
              value={this.state.name}
              label="Name"
            />
            <br />
            <TextField
              id="standard-basic"
              style={{ padding: 5 }}
              value={this.state.email}
              onChange={this.emailChange}
              label="Email Address"
            />
            <br />
            <Button
              variant="contained"
              type="submit"
              style={{ marginTop: 20, marginBottom: 20 }}
              color="primary"
            >
              Add
            </Button>
          </form>
        </center>
      </div>
    );
  }
}
