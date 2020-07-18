import React, { Component } from "react";
import "./User.css";
import { BrowserRouter } from "react-router-dom";
import SimpleTabs from "./SimpleTabs";
import axios from "axios";
export default class Profilebody extends Component {
  constructor(props) {
    super(props);
    this.state = { incomes: [], expanses: [] };
    this.incomeUpdate = this.incomeUpdate.bind(this);
    this.expanseUpdate = this.expanseUpdate.bind(this);
  }
  componentDidMount() {
    // fetch user expansers
    axios
      .get(
        "http://localhost/expanse_manager/display_expanses.php?id=" +
          this.props.userid
      )
      .then((res) => {
        this.setState({ expanses: res.data });
      })
      .catch(function (error) {
        console.log(error);
      });
    //fetch user incomes
    axios
      .get(
        "http://localhost/expanse_manager/display_incomes.php?id=" +
          this.props.userid
      )
      .then((res) => {
        this.setState({ incomes: res.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  incomeUpdate() {
    let i = 0;
    this.state.incomes.map((income) => {
      i = i + Number(income.amount);
    });
    console.log(i);
    return i;
  }
  expanseUpdate() {
    let i = 0;
    this.state.expanses.map((expanse) => {
      i = i + Number(expanse.amount);
    });
    console.log(i);
    return i;
  }
  Balance() {
    let I = 0,
      E = 0,
      B = 0;
    this.state.incomes.map((income) => {
      I = I + Number(income.amount);
    });
    this.state.expanses.map((expanse) => {
      E = E + Number(expanse.amount);
    });
    B = I - E;
    return B;
  }

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <balance>your Balance Is :{this.Balance()}</balance>
          <expanses>Total Expanse:{this.expanseUpdate()}</expanses>
          <income>Total Income :{this.incomeUpdate()}</income>
        </div>
        <SimpleTabs
          currentuser={this.props.userid}
          incomes={this.state.incomes}
          expanses={this.state.expanses}
        />
      </BrowserRouter>
    );
  }
}
