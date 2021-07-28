import s from './Navbar.module.scss';
import {NavLink} from "react-router-dom";
import classNames from "classnames/bind";
import {useState} from "react";

function Navbar() {

  const cx = classNames.bind(s)

  const [isMouseEnter, setMouseEnter] = useState(false)

  const ulClasses = cx({
    main: true,
    disable_scroll: !isMouseEnter,
    active_scroll: isMouseEnter
  })

  return (
    <div className={ulClasses}
         onMouseOver={() => {setMouseEnter(true)}}
         onMouseOut={() => {setMouseEnter(false)}}>
      <NavLink to="/Content" activeClassName={s.activeLink}>content</NavLink>
      <NavLink to="/music" activeClassName={s.activeLink}>music</NavLink>
      <NavLink to="/users" activeClassName={s.activeLink}>users</NavLink>
      <NavLink to="/dialogs" activeClassName={s.activeLink}>dialogs</NavLink>
      <NavLink to="/news" activeClassName={s.activeLink}>news</NavLink>
      <NavLink to="/settings" activeClassName={s.activeLink}>settings</NavLink>
      <a href="https://social-network.samuraijs.com/">document API</a>
    </div>
  );
}

export default Navbar;
