import {connect} from "react-redux";
import React, {useEffect, useState} from 'react'
import {getProfileThunkKreator, getStatusTC} from "../../redux/profile-reducer";
import {withRouter} from "react-router";
import RedirectHoc from "../../HOC/hoc";
import {compose} from "redux";
import s from "./Content.module.css";
import TitlePicture from "./Profile/titlePicture/TitlePicture";
import ProfileContainer from "./Profile/ProfileContaine";
import AreaNewPost from "./AreaNewPost/NewPostContainer";
import Posts from "./Posts/Posts";

const ContentContainerApi = (props) => {
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


  return (<div className={s.main}>
    <TitlePicture pictureArr={props.pictureArr}/>
    <ProfileContainer statusValue={props.statusValue}
                      profileUserData={props.profileUserData}
                      updateStatus={props.updateStatus}/>
    <AreaNewPost/>
    <Posts postDate={props.postDate}/>
  </div>)
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

