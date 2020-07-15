import React, { Component } from "react";
import {
  Button,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";
import axios from "axios";

//import { Redirect } from "react-router";

export default class Incomeform extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: "",
      name: "",
      desc: "",
      amount: "",
      categorys: [],
      userid: this.props.location.state.user,
    };

    this.handleChange = this.handleChange.bind(this);
    this.nameChange = this.nameChange.bind(this);
    this.descChange = this.descChange.bind(this);
    this.amountChange = this.amountChange.bind(this);
    this.OnSubmit = this.OnSubmit.bind(this);
  }
  componentDidMount() {
    //fetch categorys
    axios
      .get("http://localhost/expanse_manager/display_category.php")
      .then((res) => {
        this.setState({ categorys: res.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  handleChange(e) {
    this.setState({ category: e.target.value });
  }
  nameChange(e) {
    this.setState({
      name: e.target.value,
    });
  }

  amountChange(e) {
    this.setState({
      amount: e.target.value,
    });
  }
  descChange(e) {
    this.setState({
      desc: e.target.value,
    });
  }
  OnSubmit(e) {
    e.preventDefault();
    e.persist();
    const object = {
      name: this.state.name,
      amount: this.state.amount,
      cat: this.state.category,
      description: this.state.desc,
      uid: this.state.userid,
    };
    axios
      .post("http://localhost/expanse_manager/insert_expanse.php", object)
      .then((res) => console.log(res.data));

    this.setState({
      category: "",
      name: "",
      desc: "",
      amount: "",
      uid: "",
    });
  }
  render() {
    return (
      <center>
        <form onSubmit={this.OnSubmit}>
          <h2>ADD Expanse</h2>
          <TextField
            id="standard-basic"
            style={{ padding: 5 }}
            onChange={this.nameChange}
            value={this.state.name}
            label="Expanse Name"
          />
          <br />

          <TextField
            id="standard-basic"
            style={{ padding: 5 }}
            value={this.state.amount}
            onChange={this.amountChange}
            label="Amount"
          />
          <br />
          <FormControl>
            <InputLabel id="demo-simple-select-label">Category</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={this.state.category}
              onChange={this.handleChange}
            >
              {this.state.categorys.map((cat) => (
                <MenuItem value={cat.cat}>{cat.cat}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <br />
          <TextField
            id="standard-basic"
            style={{ padding: 5 }}
            value={this.state.desc}
            onChange={this.descChange}
            label="Description"
          />
          <br />

          <Button
            variant="contained"
            type="submit"
            style={{ marginTop: 20, marginBottom: 20 }}
            color="primary"
          >
            Add
          </Button>
        </form>
      </center>
    );
  }
}
