import React from "react";
import s from './Header.module.scss';
import {NavLink} from "react-router-dom";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import CustomStyledMenu from "./StyledAvatarMenu/StyledAvatarMenu";
import SimpleBottomNavigation from "./SimpleBottomNavigation/SimpleBottomNavigation";
import Logo from '../../assets/imeges/Logo.png'
import BtnStyled from "../../Elements/BtnStyled/BtnStyled";
import {useSelector} from "react-redux";


const Header = () => {
  const isAuth = useSelector(store => store.auth.isAuth)

    return (
      <div className={s.Header}>
        <div className={s.header__container}>
          <img className={s.logo} src={Logo} alt=""/>
          <div className={s.bar}>
            <SimpleBottomNavigation/>
            <CustomStyledMenu/>
            {(!isAuth &&
              <>
                <BtnStyled primary
                           startIcon={<ExitToAppIcon/>}>
                  <NavLink to="/Login" className={s.in}>
                    log In
                  </NavLink>
                </BtnStyled>
                <BtnStyled>
                  <a id='signUp' href="https://social-network.samuraijs.com/signUp" className={s.up}>
                    Sign up
                  </a>
                </BtnStyled>
              </>
            )}
          </div>
        </div>

      </div>);
  }

export default Header;
