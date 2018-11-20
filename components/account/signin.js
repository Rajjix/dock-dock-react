import React, {Fragment} from 'react';
import { Button, Grid, DialogActions, TextField, FormControl } from '@material-ui/core';
import { AccountCircle, VpnKey } from '@material-ui/icons';

export default () => {
  return (
    <Fragment >
    {/* Username */}
      <FormControl style={{margin:'5% 10%', width:'80%'}}>
        <Grid container alignItems="flex-end">
          <Grid item md ={1} xs={2}>
            <AccountCircle />
          </Grid>
          <Grid item xs={10}>
            <TextField id="input-with-icon-grid" type="text" label="Username" fullWidth/>
          </Grid>
        </Grid>
      </FormControl>
    {/*Password*/}
      <FormControl style={{margin:'5% 10%', width:'80%'}}>
        <Grid container alignItems="flex-end">
          <Grid item md ={1} xs={2}>
            <VpnKey />
          </Grid>
          <Grid item xs={10}>
            <TextField id="input-with-icon-grid" type="password" label="Password" fullWidth/>
          </Grid>
        </Grid>
      </FormControl>
      <DialogActions>
        <Button style={{background:'blue', color:'white', margin:'auto'}}>
          Login
        </Button>
      </DialogActions>
    </Fragment>
  );
}
