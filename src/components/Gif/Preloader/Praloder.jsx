import React from 'react'
import s from './Prealoder.module.css'

let Preloader = () => {
  return (
    <div className={s.main}>
      <div className="spinner-border m-5" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  )
}

export default Preloader