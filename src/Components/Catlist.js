import React, { Component } from "react";
import axios from "axios";
import { Redirect, Link } from "react-router-dom";
import { Button, TextField } from "@material-ui/core";
class Catlist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
      cat: this.props.obj.cat,
    };
    this.delete = this.delete.bind(this);
    this.ChangeCat = this.ChangeCat.bind(this);
    this.Update = this.Update.bind(this);
  }
  delete() {
    axios
      .get(
        "http://localhost/expanse_manager/delete_cat.php?id=" +
          this.props.obj.id
      )
      .then(
        this.setState({
          redirect: true,
        })
      )
      .catch((err) => console.log(err));
  }
  ChangeCat(e) {
    this.setState({ cat: e.target.value });
  }
  Update() {
    const object = {
      id: this.props.obj.id,
      category: this.state.cat,
    };
    axios
      .post("http://localhost/expanse_manager/update_cat.php", object)
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
      return <Redirect to="/category" />;
    }
    return (
      <tr>
        <td>{this.props.obj.id}</td>
        <td>
          <TextField
            value={this.state.cat}
            onChange={this.ChangeCat}
            variant="outlined"
          />
        </td>

        <td>
          <Button color="primary" variant="contained" onClick={this.Update}>
            Update
          </Button>
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
export default Catlist;
