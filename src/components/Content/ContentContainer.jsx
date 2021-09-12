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
  let matchLogin = props.match.params.userLogin
  const loginThisUser = useSelector(store => store.auth.profileUserData.login)

  const [login, setLogin] = useState(matchLogin)
  const {isActivePopup} = useSelector(store => store.post)


  if (!login) {
    setLogin(props.InitialsLogin)
  }

  useEffect(() => {
  //  props.getStatus(login)
    props.getProfileThunk(login)
  }, [props.InitialsLogin, login])

  useEffect(() => {setLogin(matchLogin)}, [matchLogin])


  return (
    <div className={s.main}>
      <Profile/>
      {(login === loginThisUser)
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
    postDate: store.post.postDate,
    InitialsLogin: store.auth.profileUserData.login,
    popupInfo: store.post.popupInfo,
    fullNameUser: store.profile.profileUserData.fullName,
    photoUsers: store.profile.profileUserData.avatar_url,
  }
}

export default compose(
  connect(mapStateToProps,
    {getProfileThunk: getProfileThunkKreator}),
  RedirectHoc,
  withRouter)(ContentContainerApi)

