import React from 'react';
import { AppBar, Tabs, Tab } from '@material-ui/core';
import Login from './signin';
import Register from './register';

class Signinup extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };
  render() {
    const { value } = this.state;
    return (
      <div >
        <AppBar position="static" color="default" style={{width:'100%'}}>
          <Tabs value={value} onChange={this.handleChange} indicatorColor="primary" textColor="inherit" fullWidth>
            <Tab label="Sign in" />
            <Tab label="Sign up" />
          </Tabs>
        </AppBar>
        {value === 0 && <Login />}
        {value === 1 && <Register />}
      </div>
    );
  }
}

export default Signinup;
