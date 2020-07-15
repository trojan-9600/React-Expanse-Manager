import React, { Component } from "react";
import "./Home.css";
import UserList from "./UserList";
import Adduser from "./Adduser";
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
    this.userarray = this.userarray.bind(this);
  }
  userarray(array) {
    this.setState({ users: array });
  }
  render() {
    return (
      <>
        <Adduser fetchuserarray={this.userarray} />

        <UserList obj={this.state.users} />
      </>
    );
  }
}
