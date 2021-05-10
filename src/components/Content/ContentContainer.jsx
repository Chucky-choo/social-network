import Content from "./Content";
import {connect} from "react-redux";
import React, {useEffect, useState} from 'react'
import {getProfileThunkKreator, getStatusTC} from "../../redux/profile-reducer";
import {withRouter} from "react-router";
import RedirectHoc from "../../HOC/hoc";
import {compose} from "redux";


let ContentContainerApi = (props) => {
  let matchId = props.match.params.userId
  const [userId, setUsersId] = useState(matchId)
  if (!userId) {
    setUsersId(props.InitialsUserId)
  }

  useEffect(() => {
    props.getStatus(userId)
    props.getProfileThunk(userId)
  }, [props.InitialsUserId, userId])

  useEffect(() => {
    setUsersId(matchId)
  }, [matchId])


  return (<Content pictureArr={props.pictureArr}
                   statusValue={props.statusValue}
                   profileUserData={props.profileUserData}
                   updateStatus={props.updateStatus}
                   postDate={props.postDate}/>)
}


let mapStateToProps = (store) => {
  return {
    pictureArr: store.post.imgTemaData,
    postDate: store.post.postDate,
    InitialsUserId: store.auth.profileUserData.userId,
  }
}

export default compose(
  connect(mapStateToProps,
    {getStatus: getStatusTC, getProfileThunk: getProfileThunkKreator}),
  RedirectHoc,
  withRouter
)(ContentContainerApi)

