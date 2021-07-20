import React from "react";
import s from "./user.module.scss"
import shadow from '../../../assets/imeges/kage.png'
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";
import {changeFollowThunkCreators} from "../../../redux/users-reducer";
import Button from "@material-ui/core/Button";


const  User = ({usersData, blockFollow}) => {
const setFollow = changeFollowThunkCreators

  const dispatch = useDispatch()

  return (
    <div className={s.main}>
      {usersData.map(el => {
          return (
            <div className={s.flex} key={el.id}>
              <div className={s.lef}>
                <NavLink to={`/Content/` + el.id}>
                  <img className={s.img}
                       src={el.photos.small || shadow}
                       alt=""/>
                </NavLink>
                <Button variant="outlined"
                        size="small"
                        onClick={() => {dispatch(setFollow(el.id, el.followed))}}
                        className={s.btn}
                        disabled={blockFollow.some(id => id === el.id)}>
                  {el.followed ? "Unfollow" : "Follow"}
                </Button>
              </div>
              <div className={s.profileInfo}>
                <span className={s.name}>{el.name}</span>
                <span>{el.status}</span>
              </div>
            </div>
          )
        }
      )}
    </div>)
}

export default User