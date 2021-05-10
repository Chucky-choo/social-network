import s from './DialogItem.module.css';
import {NavLink} from "react-router-dom";


let Dialog = (props) => {
  return (
    <div className={s.dialog}>
      <NavLink to={"/dialogs/" + props.id} activeClassName={s.activeLink}>{props.name}</NavLink>
    </div>
  );
}

export default Dialog;
