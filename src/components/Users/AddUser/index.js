import React from 'react'
import * as S from './index.style'
import * as Mui from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const Index = () => {
  const classes = useStyles();
  return (
    <form className={classes.root} noValidate autoComplete="off">
    <Mui.TextField id="standard-basic" label="Standard" />
    <Mui.TextField id="filled-basic" label="Filled" variant="filled" />
    <Mui.TextField id="outlined-basic" label="Outlined" variant="outlined" />
  </form>
  )
}

export default Index
