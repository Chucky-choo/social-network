import React from 'react';
import {Link} from "react-router-dom";
import LookingMonkey from '../../assets/imeges/NotFoundImg.jpg'
import {makeStyles} from "@material-ui/core";


const useStyles = makeStyles({
  root:{
    background: '#f0f0f0',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    marginTop: 20,
    width: '30vw'
  }
});



const NotFound = () => {
  const c = useStyles()


  return (
    <div className={c.root}>
      <h1>404 - Not Found!</h1>
      <Link to="/">
        Go Home
      </Link>
      <img src={LookingMonkey} alt=""/>
    </div>
  );
};

export default NotFound;
