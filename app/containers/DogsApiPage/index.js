import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Information from './Information';
// import Avatar from '@material-ui/core/Avatar';
// import { red } from '@material-ui/core/colors';
// import car from './car.jpg';

// import CenteredSection from '../HomePage/CenteredSection';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
  avatar: {
    margin: 10,
  },
  root: {
    flexGrow: 1,
  },
  bigAvatar: {
    margin: 10,
    width: 100,
    height: 100,
  },
}));
const dataHeros = [
  {
    id: 1,
    Name: 'tran tuan vu',
    Age: '16',
    Address: 'ha noi',
  },
  {
    id: 2,
    Name: 'lai van sam',
    Age: '18',
    Address: 'quang ninh ',
  },
  {
    id: 3,
    Name: 'tran quang khai',
    Age: '19',
    Address: 'hai phong',
  },
  {
    id: 4,
    Name: 'tran van quyet',
    Age: '17',
    Address: 'gia lai',
  },
];
export default function DogsApiPage() {
  const [age, setAge] = useState(25);
  const [fistname, setFirstName] = useState('trần');
  const [lastname, setLastName] = useState('tuấn vũ');
  const [fullname, setFullName] = useState(`${fistname}${lastname}`);
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={6} sm={3}>
          <p>Age :{age} </p>
          <Button
            variant="contained"
            className={classes.button}
            color="primary"
            onClick={() => setAge(age + 25)}
          >
            Age
          </Button>
        </Grid>
        <Grid item xs={6} sm={3}>
          <p>FistName : {fistname} </p>
          <Button
            variant="contained"
            className={classes.button}
            color="primary"
            onClick={() => setFirstName('nguyễn ')}
          >
            FistName
          </Button>
        </Grid>
        <Grid item xs={6} sm={3}>
          <p>LastName : {lastname} </p>
          <Button
            variant="contained"
            className={classes.button}
            color="primary"
            onClick={() => setLastName('huy huân')}
          >
            LastName
          </Button>
        </Grid>
        <Grid item xs={6} sm={3}>
          <p> Tên đầy đủ là : {fullname} </p>
          <Button
            variant="contained"
            className={classes.button}
            color="primary"
            onClick={() => setFullName(`${fistname}${lastname}`)}
          >
            FullName
          </Button>
        </Grid>
        <Grid item xs={12} sm={12}>
          {dataHeros.map(dataHero => (
            <Grid item xs={6} sm={3}>
              <Button
                variant="contained"
                className={classes.button}
                key={dataHero.id}
                // onclick={this.information()}
              >
                {dataHero.Name}
              </Button>
              <Grid item xs={12} sm={12}>
                <Information />
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </div>
  );
}
