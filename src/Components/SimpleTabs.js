import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { Switch, Route, Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import Expanseform from "./Expanseform";
import Incomeform from "./Incomeform";
import AllExpanses from "./AllExpanse";
import AllIncomes from "./AllIncomes";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function SimpleTabs(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function tableExpanse() {
    return props.expanses.map(function (object, i) {
      return <AllExpanses obj={object} user={props.currentuser} key={i} />;
    });
  }
  function tableIncomes() {
    return props.incomes.map(function (object, i) {
      return <AllIncomes obj={object} user={props.currentuser} key={i} />;
    });
  }
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          <Tab label="Form" {...a11yProps(0)} />
          <Tab label="Expanses" {...a11yProps(1)} />
          <Tab label="incomes" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <div className="inputForm">
          <center>
            <Link
              to={{
                pathname: "/incomeform",
                state: {
                  user: props.currentuser,
                },
              }}
            >
              <Button variant="contained" color="primary">
                Income
              </Button>{" "}
            </Link>
            <Link
              to={{
                pathname: "/expanseform",
                state: {
                  user: props.currentuser,
                },
              }}
            >
              <Button variant="contained" color="secondary">
                Expanse
              </Button>
            </Link>
          </center>
          <Switch>
            <Route path="/incomeform" component={Incomeform} key={Incomeform} />
            <Route
              path="/expanseform"
              component={Expanseform}
              key={Expanseform}
            />
          </Switch>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div className="expanse-Box">
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th>Index</th>
                  <th>Expanse Name</th>
                  <th>Category</th>
                  <th>Description</th>
                  <th>Amount</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>{tableExpanse()}</tbody>
            </table>
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <div className="income-Box">
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th>Index</th>
                  <th>Income Name</th>
                  <th>Category</th>
                  <th>Description</th>
                  <th>Amount</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>{tableIncomes()}</tbody>
            </table>
          </div>
        </div>
      </TabPanel>
    </div>
  );
}
