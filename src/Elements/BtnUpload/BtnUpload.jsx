import React from 'react';
import s from './BtnUpload.module.scss';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import Button from "@material-ui/core/Button";
import {makeStyles, withStyles} from "@material-ui/core";


const BootstrapButton = withStyles({
  root: {
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: '#0063cc',
    borderColor: '#0063cc',
    fontFamily: ['-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto',].join(','),
    '&:hover': {
      backgroundColor: '#0069d9',
      borderColor: '#0062cc',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#005cbf',
      borderColor: '#005cbf',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  },
})(Button);


const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

const BtnUpload = ({click, text}) => {

  const classes = useStyles();

  return (
    <div className={s.main}>
      <BootstrapButton variant="contained"
                       color="primary"
                       disableRipple
                       className={classes.margin}
                       onClick={click}
                       startIcon={<AddAPhotoIcon/>}>
        {text}
      </BootstrapButton>
    </div>
  );
};

export default BtnUpload;
