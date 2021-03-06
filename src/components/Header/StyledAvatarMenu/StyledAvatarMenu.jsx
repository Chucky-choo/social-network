import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import React, {useState} from "react";
import {deleteAuth, setActiveContent} from "../../../redux/header-reducer";
import {useDispatch, useSelector} from "react-redux";
import {NavLink} from "react-router-dom";
import {makeStyles} from "@material-ui/core";
import s from "../Header.module.scss";
import kage from "../../../assets/imeges/kage.png";
import icons from '../../../assets/icons/iconUserBlac.png'

const options = [
  {name: 'Profile', way: '/Content'},
  {name: 'Settings', way: '/settings'},
  {name: 'News', way: '/news'},
];

const ITEM_HEIGHT = 42;

const useStyles = makeStyles({
  ava: {
    width: ITEM_HEIGHT,
    height: ITEM_HEIGHT,
    borderRadius: 50,
  },
  activeLink: {
    color: 'red',
  },
  link: {
    textDecoration: 'none',
    color: 'black',
    '&:hover': {
      textDecoration: 'none',
      color: 'black',
    }
  },
  style: {
    maxHeight: ITEM_HEIGHT *1.5,
    // width: '20ch',
  },

});


export default function StyledAvatarMenu() {
  const dispatch = useDispatch()
  const classes = useStyles()

  const photoUsers = useSelector(store => store.auth.profileUserData.photos.small)

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    dispatch(setActiveContent(null))
    setAnchorEl(null);
  };

  const ToLogOut = () => {
    dispatch(setActiveContent(null))
    dispatch(deleteAuth())
    handleClose()
  }

  return (
    <div>
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
        // className={classes.ava}
        >
        {/*<img className={s.ava} src={photoUsers || kage} alt=''/>*/}
        <img
          className={classes.ava}
          src={photoUsers} alt=''/>
      </IconButton>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        PaperProps={classes.style}
      >
        {options.map((option) => (
          <NavLink to={option.way} className={classes.link}>
            <MenuItem key={option.name} onClick={handleClose}>
              {option.name}
            </MenuItem>
          </NavLink>
        ))}
        <a href="https://social-network.samuraijs.com/">
          <MenuItem>
            Document API
          </MenuItem>
        </a>
        <NavLink to={'/login'} className={classes.link}>
          <MenuItem selected onClick={ToLogOut}>
            Log out
          </MenuItem>
        </NavLink>
      </Menu>
    </div>
  );
}