import s from './status-profile.module.css'
import React, {useState, useEffect} from 'react';


export let StatusProfile = (props) => {
  const [status, setStatus] = useState(props.status);
  const [isWriting, isWritingStatus] = useState(false);

  let handleChange = (e) => {
    setStatus(e.target.value)
  }

  let changeStatus = () => {
    isWritingStatus(!isWriting)
    if (isWriting === true) {
      props.updateStatus(status)
    }
  }

  useEffect(() => {
    setStatus(props.status)
  }, [props.status])



  if(props.matchId !== undefined) {
    return <div className={s.main}>
      <p>status</p>
      <p>{props.status}</p>
    </div>
  }

  return (<div onBlur={changeStatus}
               className={s.main}
               onDoubleClick={changeStatus}>
       <p>Your status</p>
    {isWriting && !props.matchId
      ? <div><input type="text"
                    value={status}
                    onInput={handleChange}
                    autoFocus={true}/>
      </div>
      : <p>{props.status}</p>}
  </div>)
}
