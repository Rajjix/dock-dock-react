import React, {Fragment} from 'react';
import { Button, DialogActions, TextField } from '@material-ui/core';

export default () => {
  return (
    <Fragment>
        <TextField autoFocus id="name" label="First Name" type="text"    style={{margin:'5% 5%', width:'40%'}}/>
        <TextField autoFocus id="name" label="Last Name" type="text"    style={{margin:'5% 5%', width:'40%'}}/>
        <br />
        <TextField autoFocus id="name" label="Username" type="text" style={{margin:'2% 5%', width:'90%'}}/>
        <br />
        <TextField autoFocus id="name" label="Email" type="email" style={{margin:'2% 5%', width:'90%'}}/>
        <br />
        <TextField autoFocus id="name" label="Password" type="password" style={{margin:'2% 5%', width:'90%'}}/>
        <br />
        <TextField autoFocus id="name" label="Password" type="password" style={{margin:'2% 5%', width:'90%'}}/>
        <br />
      <DialogActions style={{margin:'5%'}}>
        <Button style={{background:'blue', color:'white', margin:'auto'}}>
          Register
        </Button>
        <Button style={{background:'blue', color:'white', margin:'auto'}}>
          Cance
        </Button>
      </DialogActions>
    </Fragment>
  );
}
