import React, { Component } from "react";
import axios from "axios";
import { TextField, Button } from "@material-ui/core";
import Catlist from "./Catlist";
import { Redirect } from "react-router-dom";
export default class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categorys: [],
      category: "",
      redirect: false,
    };
    this.OnSubmit = this.OnSubmit.bind(this);
    this.Changecat = this.Changecat.bind(this);
    this.DisplayCategorys = this.DisplayCategorys.bind(this);
  }
  componentDidMount() {
    axios
      .get("http://localhost/expanse_manager/display_category.php")
      .then((res) => {
        this.setState({ categorys: res.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  OnSubmit(e) {
    e.preventDefault();
    const obj = {
      cat: this.state.category,
    };
    axios
      .post("http://localhost/expanse_manager/insert_category.php", obj)
      .then((res) =>
        this.setState({
          redirect: true,
        })
      )
      .catch(function (error) {
        console.log(error);
      });
    console.log(this.state.categorys);
  }
  Changecat(e) {
    this.setState({ category: e.target.value });
  }
  DisplayCategorys() {
    return this.state.categorys.map(function (object, i) {
      return <Catlist obj={object} key={i} />;
    });
  }

  render() {
    const { redirect } = this.state;
    if (redirect) {
      return <Redirect to="/category" />;
    }
    return (
      <>
        <div className="Add-cat-form">
          <form onSubmit={this.OnSubmit}>
            <TextField
              id="standard-basic"
              style={{ padding: 5 }}
              onChange={this.Changecat}
              value={this.state.category}
              label="Enter category"
            />
            <br />
            <Button variant="contained" type="submit" color="primary">
              Add
            </Button>
          </form>
        </div>
        <div className="display-cat">
          <table className="table table-striped" style={{ marginTop: 20 }}>
            <thead>
              <tr>
                <th>Category ID</th>
                <th>Category Name</th>

                <th colSpan="2">Action</th>
              </tr>
            </thead>
            <tbody>{this.DisplayCategorys()}</tbody>
          </table>
        </div>
        <div className="edit-cat"></div>
      </>
    );
  }
}
