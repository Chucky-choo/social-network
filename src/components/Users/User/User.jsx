import React from "react";
import s from "./user.module.css"
import shadow from '../../../assets/imeges/kage.png'
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";
import {changeFollowThunkCreators} from "../../../redux/users-reducer";


let User = ({usersData, blockFollow}) => {

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
                <button onClick={() => {
                  dispatch(changeFollowThunkCreators(el.id, el.followed))
                }}
                        disabled={blockFollow.some(id => id === el.id)}>
                  {el.followed ? "Unfollow" : "Follow"}
                </button>
              </div>
              <div >
                <div className={s.profileInfo}>{el.name}</div>
                <div className={s.profileInfo}>{el.status}</div>
              </div>
            </div>
          )
        }
      )}
    </div>)
}

export default User