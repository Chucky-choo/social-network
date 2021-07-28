import {connect, useSelector} from "react-redux";
import React, {useEffect, useState} from 'react'
import {getProfileThunkKreator, getStatusTC} from "../../redux/profile-reducer";
import {withRouter} from "react-router";
import RedirectHoc from "../../HOC/hoc";
import {compose} from "redux";
import s from "./Content.module.scss";
import TitlePicture from "./Profile/titlePicture/TitlePicture";
import Profile from "./Profile/Profile";
import Posts from "./Posts/Posts";
import Popup from "../../Elements/Popup/Popup";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import SendIcon from '@material-ui/icons/Send';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import NewPost from "./NewPost/NewPost";
import styled from 'styled-components'


const PopupPostContainer = styled.div`
  padding: 10px 10px 0 10px;

  svg {
    font-size: 35px;
  }
`
const PopupHeader = styled.div`
  display: grid;
  grid-template-columns: 45px 1fr auto;

  img {
    width: 32px;
    border-radius: 50px;
  }
`

const PopupPostImg = styled.img`
  max-height: 300px;
  width: 100%;
`


const PopupFooter = styled.div`
  margin-top: 10px;
  display: grid;
  grid-template-columns: 50px 50px 1fr 40px;
`


const ContentContainerApi = (props) => {
  let matchId = props.match.params.userId
  const idCurrentUser = useSelector(store => store.auth.id)

  const [userId, setUsersId] = useState(matchId)
  const {isActivePopup} = useSelector(store => store.post)


  if (!userId) {
    setUsersId(props.InitialsUserId)
  }

  useEffect(() => {
    props.getStatus(userId)
    props.getProfileThunk(userId)
  }, [props.InitialsUserId, userId])

  useEffect(() => {setUsersId(matchId)}, [matchId])


  return (
    <div className={s.main}>
      <TitlePicture pictureArr={props.pictureArr}/>
      <Profile/>
      {(userId === idCurrentUser)
        ? <>
          <NewPost/>
          <Posts/>
          <Popup isActive={isActivePopup}>
            <PopupPostContainer>
              <PopupHeader>
                <img src={props.photoUsers} alt=""/>
                <p>{props.fullNameUser}</p>
                <MoreHorizIcon/>
              </PopupHeader>
              <PopupPostImg src={props.popupInfo.photo} alt=""/>
              <PopupFooter>
                <FavoriteBorderIcon/>
                <ChatBubbleOutlineIcon/>
                <SendIcon/>
                <BookmarkBorderIcon/>
              </PopupFooter>
            </PopupPostContainer>
          </Popup>

        </>
        : null
      }

    </div>
  )
}


let mapStateToProps = (store) => {
  return {
    pictureArr: store.post.imgTemaData,
    postDate: store.post.postDate,
    InitialsUserId: store.auth.profileUserData.userId,
    popupInfo: store.post.popupInfo,
    fullNameUser: store.profile.profileUserData.fullName,
    photoUsers: store.profile.profileUserData.photos.small
  }
}

export default compose(
  connect(mapStateToProps,
    {getStatus: getStatusTC, getProfileThunk: getProfileThunkKreator}),
  RedirectHoc,
  withRouter)(ContentContainerApi)

