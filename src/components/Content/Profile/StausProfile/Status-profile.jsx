import React, {useState, useEffect} from 'react';
import {putStatusTС} from "../../../../redux/profile-reducer";
import {useDispatch, useSelector} from "react-redux";
import s from '../Profile.module.scss'
import Popup from "../../../../Elements/Popup/Popup";

export const StatusProfile = (props) => {
  const dispatch = useDispatch()

  const matchId = useSelector(store => store.profile.profileUserData.userId)
  const idThisUser = useSelector(store => store.auth.id)

  const [status, setStatus] = useState(props.status);
  const [isWriting, isWritingStatus] = useState(false);


  let handleChange = (e) => {
    setStatus(e.target.value)
  }

  let changeStatus = () => {
    isWritingStatus(!isWriting)
    if (isWriting === true) {
      dispatch(putStatusTС(status))
    }
  }

  useEffect(() => {
    setStatus(props.status)
  }, [props.status])


  if (props.matchId !== undefined) {
    return <div>
      <p>{props.status}</p>
    </div>
  }

  return (<div onBlur={changeStatus}
               onDoubleClick={changeStatus}
               className={s.status}>
    {(isWriting && (matchId === idThisUser)) ? <div>
        <Popup isActive={true}>
          <input type="text"
                 value={status}
                 onInput={handleChange}
                 autoFocus={true}/>
        </Popup>

      </div>
      : <p>{props.status}</p>}
  </div>)
}
