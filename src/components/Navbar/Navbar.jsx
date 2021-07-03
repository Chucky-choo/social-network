import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

function Navbar() {
  return (
  <div className={s.main}>
    <NavLink to="/Content" activeClassName={s.activeLink}>Content</NavLink>
    <NavLink to="/dialogs" activeClassName={s.activeLink}>Dialogs</NavLink>
    <NavLink to="/news" activeClassName={s.activeLink}>News</NavLink>
    <NavLink to="/music" activeClassName={s.activeLink}>Music</NavLink>
    <NavLink to="/settings" activeClassName={s.activeLink}>Settings</NavLink>
    <NavLink to="/users" activeClassName={s.activeLink}>Users</NavLink>
    <a href="https://social-network.samuraijs.com/">Document API</a>
  </div>
  );
}

export default Navbar;
