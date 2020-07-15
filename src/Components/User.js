import React, { Component } from "react";
import axios from "axios";
import "./User.css";
import Profileheader from "./Profileheader";
import Profilebody from "./Profilebody";
export default class User extends Component {
  constructor(props) {
    super(props);
    this.state = { user: [], expanse: [], income: [] };
  }
  componentDidMount() {
    axios
      .get(
        "http://localhost/expanse_manager/fetch_user_account.php?id=" +
          this.props.match.params.id
      )
      .then((res) => {
        this.setState({ user: res.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  render() {
    return (
      <>
        <Profileheader name={this.state.user.name} />
        <Profilebody userid={this.props.match.params.id} />
      </>
    );
  }
}
