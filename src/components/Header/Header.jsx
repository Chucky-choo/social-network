import React from "react";
import s from './Header.module.scss';
import {NavLink} from "react-router-dom";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import StyledAvatarMenu from "./StyledAvatarMenu/StyledAvatarMenu";
import SimpleBottomNavigation from "./SimpleBottomNavigation/SimpleBottomNavigation";
 import Logo from '../../assets/imeges/Logo.png'
import BtnStyled from "../../Elements/BtnStyled/BtnStyled";
import {useSelector} from "react-redux";
import {useMediaQuery} from "@material-ui/core";


const Header = () => {
  const isAuth = useSelector(store => store.auth.isAuth)

  const matches = useMediaQuery('(min-width:450px)');

    return (
      <div className={s.Header}>
        <div className={s.header__container}>
          <img className={s.logo} src={Logo} alt=""/>
          <div className={s.bar}>
            <SimpleBottomNavigation/>
            {isAuth && <StyledAvatarMenu/>  }
            {(!isAuth &&
              <>
                {matches && <StyledAvatarMenu/> }
                <BtnStyled primary
                           startIcon={<ExitToAppIcon/>}>
                  <NavLink to="/Login" className={s.in}>
                    log In
                  </NavLink>
                </BtnStyled>
              </>
            )}
          </div>
        </div>
      </div>);
  }

export default Header;
