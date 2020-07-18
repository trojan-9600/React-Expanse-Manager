import React, { Component } from "react";
import "./Home.css";
import UserList from "./UserList";
import Adduser from "./Adduser";
import axios from "axios";
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost/expanse_manager/list.php")
      .then((res) => {
        this.setState({
          users: res.data,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  componentDidUpdate() {
    axios
      .get("http://localhost/expanse_manager/list.php")
      .then((res) => {
        this.setState({
          users: res.data,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <>
        <Adduser />

        <UserList obj={this.state.users} />
      </>
    );
  }
}
