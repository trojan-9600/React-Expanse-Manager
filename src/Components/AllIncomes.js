import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";
import { Button, TextField } from "@material-ui/core";

export default class AllIncomes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.obj.id,
      name: this.props.obj.I_name,
      category: this.props.obj.category,
      desc: this.props.obj.desc,
      amount: this.props.obj.amount,
    };
    this.delete = this.delete.bind(this);
    this.Update = this.Update.bind(this);
  }

  delete() {
    axios
      .get(
        "http://localhost/expanse_manager/delete_income.php?id=" +
          this.props.obj.id
      )
      .then(this.setState({}))
      .catch((err) => console.log(err));
  }
  Update() {
    const obj = {
      uid: this.props.user,
      id: this.state.id,
      name: this.state.name,
      category: this.state.category,
      desc: this.state.desc,
      amount: this.state.amount,
    };

    console.log(obj);
    axios
      .post("http://localhost/expanse_manager/update_income.php", obj)
      .then((res) => {
        console.log(res.data);
        this.props.onUpdate();
      })
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
