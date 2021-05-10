import {connect} from "react-redux";
import React from 'react'
import {withRouter} from "react-router";
import {compose} from "redux";
import Profile from "./Profile";
import {putStatusTС} from "../../../redux/profile-reducer";



let ProfileContainerMatch = (props) => {
  let matchId = props.match.params.userId
  return (
    <Profile {...props} matchId={matchId} />
  )
}

let mapStateToProps = (store) => {
  return {
    profileUserData: store.profile.profileUserData,
    statusValue: store.profile.statusValue,
    isLoading: store.profile.isLoading
  }
}

export default compose(
  connect(mapStateToProps,
    {updateStatus: putStatusTС}),
  withRouter
)(ProfileContainerMatch)
