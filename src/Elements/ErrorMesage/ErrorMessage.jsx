import React from 'react';
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
  error: {
    margin: 0,
    padding: 0,
    color: 'black',
    fontSize: 20,
    fontWeight: 'bolder',
  },
  redLine: {
    width: 300,
    height: 2,
    background: '#c32b48',
    marginBottom: 10,
  }



})


const ErrorMessage = ({text}) => {
  const c = useStyles()
  return (
    <>
      <p className={c.error}> {text}</p>
      <div className={c.redLine}></div>
    </>
  );
};

export default ErrorMessage;
