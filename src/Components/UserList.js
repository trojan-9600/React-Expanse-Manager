import React, { Component } from "react";
import "./Home.css";
import AllUsers from "./AllUsers";

import axios from "axios";
import { Button } from "@material-ui/core";
class UserList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      redirect: false,
    };
    this.update = this.update.bind(this);
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

  update() {
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

  userList() {
    return this.state.users.map(function (object, i) {
      return <AllUsers obj={object} key={i} />;
    });
  }

  render() {
    return (
      <div className="userList">
        <center>
          <h2>User List</h2>
          <Button onClick={this.update} variant="outlined" color="primary">
            Update
          </Button>

          <table className="table table-striped" style={{ marginTop: 20 }}>
            <thead>
              <tr>
                <th>User ID</th>
                <th>User Name</th>
                <th>Email</th>
                <th colSpan="2">Action</th>
              </tr>
            </thead>
            <tbody>{this.userList()}</tbody>
          </table>
        </center>
      </div>
    );
  }
}
export default UserList;
