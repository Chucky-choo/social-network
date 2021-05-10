import {Redirect} from "react-router";
import React from 'react';
import {connect} from "react-redux";

let mapProps = (state) => {
  return {isAuth: state.auth.isAuth}
}

let RedirectHoc = (Component) => {
  let RedirectWrap = (props) => {
    if (!props.isAuth) {return <Redirect to='/login' />}
    return <Component{...props} />
  }

  RedirectWrap = connect(mapProps)(RedirectWrap)
  return RedirectWrap
}

export default RedirectHoc