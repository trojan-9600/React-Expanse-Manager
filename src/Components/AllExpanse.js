import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import { Button, TextField } from "@material-ui/core";
import axios from "axios";
export default class AllExpanse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
      id: this.props.obj.id,
      name: this.props.obj.E_name,
      category: this.props.obj.category,
      desc: this.props.obj.desc,
      amount: this.props.obj.amount,
    };
    this.delete = this.delete.bind(this);
  }

  delete() {
    axios
      .get(
        "http://localhost/expanse_manager/delete_expanse.php?id=" +
          this.props.obj.id
      )
      .then(
        this.setState({
          redirect: true,
        })
      )
      .catch((err) => console.log(err));
  }
  render() {
    return (
      <tr>
        <td>{this.props.obj.id}</td>
        <td>
          <TextField
            value={this.state.name}
            onChange={(e) => {
              this.setState({ name: e.target.value });
            }}
            variant="outlined"
          />
        </td>
        <td>
          <TextField
            value={this.state.category}
            onChange={(e) => {
              this.setState({ category: e.target.value });
            }}
            variant="outlined"
          />
        </td>
        <td>
          <TextField
            value={this.state.desc}
            onChange={(e) => {
              this.setState({ desc: e.target.value });
            }}
            variant="outlined"
          />
        </td>
        <td>
          <TextField
            value={this.state.amount}
            onChange={(e) => {
              this.setState({ amount: e.target.value });
            }}
            variant="outlined"
          />
        </td>
        <td>
          <Button variant="contained" onClick={this.Update} color="primary">
            Update
          </Button>
          <Button variant="contained" onClick={this.delete} color="secondary">
            Delete
          </Button>
        </td>
      </tr>
    );
  }
}
