import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";
import { Button, TextField } from "@material-ui/core";

export default class AllIncomes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
      id: this.props.obj.id,
      name: this.props.obj.I_name,
      category: this.props.obj.category,
      desc: this.props.obj.desc,
      amount: this.props.obj.amount,
    };
    this.delete = this.delete.bind(this);
    this.Update = this.Update.bind(this);
  }
  componentDidMount() {
    const { user } = this.props.user;
  }
  delete() {
    axios
      .get(
        "http://localhost/expanse_manager/delete_income.php?id=" +
          this.props.obj.id
      )
      .then(
        this.setState({
          redirect: true,
        })
      )
      .catch((err) => console.log(err));
  }
  update() {
    axios
      .get(
        "http://localhost/expanse_manager/delete_income.php?id=" +
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
    const { redirect } = this.state;
    if (redirect) {
      return <Redirect to="/" />;
    }
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
