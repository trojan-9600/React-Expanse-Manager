import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";

class AllUsers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
    };
    this.delete = this.delete.bind(this);
  }
  delete() {
    axios
      .get(
        "http://localhost/expanse_manager/delete.php?id=" + this.props.obj.uid
      )
      .then(
        this.setState({
          redirect: true,
        })
      )
      .catch((err) => console.log(err));
  }

  render() {
    const { redirect } = this.state;
    if (redirect) {
      return <Redirect to="/" />;
    }
    return (
      <tr>
        <td>{this.props.obj.uid}</td>
        <td>{this.props.obj.name}</td>
        <td>{this.props.obj.email}</td>
        <td>
          <Link to={"/User/" + this.props.obj.uid} className="btn btn-primary">
            Open
          </Link>
        </td>
        <td>
          <button onClick={this.delete} className="btn btn-danger">
            Delete
          </button>
        </td>
      </tr>
    );
  }
}
export default AllUsers;
