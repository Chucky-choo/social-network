import React from 'react';
import Monkey from '../../assets/imeges/workingMonkeyImg.jpg'
import {makeStyles} from "@material-ui/core";
import c from './style'
import useStyles from "./style";

const NotAddedContent = () => {
  const c = useStyles()

  return (
    <div className={c.root}>
      <h1>I am working on this page</h1>
      <img className={c.img} src={Monkey} alt=""/>
    </div>
  );
};

export default NotAddedContent;
