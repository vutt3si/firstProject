import React from 'react';
import { makeStyles, TextField } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  root: {
    flexGrow: 1,
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
}));
export default function Index() {
  const classes = useStyles();
  return (
    <div>
      <TextField
        id="filled-full-width"
        fullWidth
        label="ToDo"
        placeholder="Nhập ToDo"
        multiline
        className={classes.textField}
        margin="normal"
        variant="filled"
      />
    </div>
  );
}
