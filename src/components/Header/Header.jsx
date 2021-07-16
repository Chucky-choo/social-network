import React from "react";
import logo from './logo.svg';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import kage from '../../assets/imeges/kage.png'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Button from "@material-ui/core/Button";

let Header = React.memo(({auth, photoUsers, deleteAuth}) => {


  const triggerNavLink = () => {
    const a = document.querySelector('a')
    a.click()
  }

  return (
    <div className={s.Header}>
      <img src={logo} alt={''}
           className={s.Logo}/>
      {(auth.isAuth)
        ? <div className={s.bar}>
          <p className={s.name}>
            {auth.profileUserData.fullName}
          </p>
          {(photoUsers)
            ? <img className={s.ava} src={photoUsers} alt=''/>
            : <img className={s.ava} src={kage} alt=''/>}
          <Button
            variant="contained"
            onClick={() => deleteAuth()}
            size="small"
            className={s.btnOut}
            startIcon={<ExitToAppIcon/>}
          >
            log out
          </Button>
        </div>
        : <Button
          variant="contained"
          onClick={triggerNavLink}
          size="small"
          className={s.btnIn}
          startIcon={<ExitToAppIcon/>}
        >
          log In
        </Button>}
      <NavLink to={'/login'} className={s.navLink}/>
    </div>);
})

export default Header;
