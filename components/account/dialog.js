import React, {Component} from 'react';
import { Button, Dialog, DialogContent } from '@material-ui/core';
import Signinup from './panels';

class Login extends Component {
  state = {
    open: false,
  };
	
  styles = {
    button: {
	    width: '100%',
	    background: 'blue',
	  },
    contain: {
	    width:'20%',
	    margin:' 10px auto',
	  },
    dialog: {
      background: 'rgba(130, 130, 130, 0.2)',
    }
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div style={this.styles.contain}>
        <Button style={this.styles.button} onClick={this.handleClickOpen}>Sign in / Register</Button>
        <Dialog style={this.styles.dialog}
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title">
          <DialogContent style={{width:'100%', padding: '0'}}>
            <Signinup />
          </DialogContent>
        </Dialog>
      </div>
    );
  }
}

export default Login;
