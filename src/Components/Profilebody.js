import React, { Component } from "react";
import "./User.css";
import { BrowserRouter } from "react-router-dom";
import SimpleTabs from "./SimpleTabs";
import axios from "axios";
export default class Profilebody extends Component {
  constructor(props) {
    super(props);
    this.state = { incomes: [], expanses: [] };
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
  render() {
    return (
      <BrowserRouter>
        <SimpleTabs
          currentuser={this.props.userid}
          incomes={this.state.incomes}
          expanses={this.state.expanses}
        />

        {/* <div className="container">
          <div className="row">
            <div className=".col-sm-4">
              <div className="expanse-Box">
                <div class="table-responsive">
                  <table class="table">
                    <thead>
                      <tr>
                        <th>Inswx</th>
                        <th>Expanse Name</th>
                        <th>Amout</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Anna</td>
                        <td>Pitt</td>
                        <td>Button</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className=".col-sm-4">
              <div className="inputForm">
                <center>
                  <Link to="/incomeform">
                    <Button variant="contained" color="primary">
                      Income
                    </Button>
                  </Link>
                  <Link to="/expanseform">
                    <Button variant="contained" color="secondary">
                      Expanse
                    </Button>
                  </Link>
                </center>
                <Switch>
                  <Route path="/incomeform" component={Incomeform} />
                  <Route path="/expanseform" component={Expanseform} />
                </Switch>
              </div>
            </div>
            <div className=".col-sm-4">
              <div className="income-Box">
                <div class="table-responsive">
                  <table class="table">
                    <thead>
                      <tr>
                        <th>Inswx</th>
                        <th>Expanse Name</th>
                        <th>Amout</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Anna</td>
                        <td>Pitt</td>
                        <td>Button</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </BrowserRouter>
    );
  }
}
