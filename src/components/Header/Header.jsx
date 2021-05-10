import React from "react";
import logo from './logo.svg';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import kage from '../../assets/imeges/kage.png'

let Header = React.memo(({auth, photoUsers, deleteAuth}) => {
  return (
    <div className={s.Header}>
      <img src={logo} alt={''}
           className={s.Logo}
      />
      {(auth.isAuth) ? <div className={s.bar}>
          <p className={s.name}>
            {auth.profileUserData.fullName}
          </p>
          {(photoUsers)
            ? <img className={s.ava} src={photoUsers} alt={''}/>
            : <img className={s.ava} src={kage} alt={''}/> }
          <button style={{background: "red"}}
                  type="button"
                  className={s.button}
                  onClick={() => deleteAuth()}>
            log aut
          </button>
        </div>
        : <NavLink to={'/login'}
                   className={s.button}>
          Login
        </NavLink>}
    </div>);
})

export default Header;
