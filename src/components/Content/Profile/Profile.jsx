import {useSelector} from "react-redux";
import React from 'react'
import s from "./Profile.module.scss";
import Kage from "../../../assets/imeges/kage.png";
import {NavLink} from "react-router-dom";
import LinkIcons from "./linkIcon/link-ikon";
import {StatusProfile} from "./StausProfile/Status-profile";
import Preloader from "../../Gif/Preloader/Praloder";
import Button from '@material-ui/core/Button';
import BtnStyled from "../../../Elements/BtnStyled/BtnStyled";
import AddAlarmIcon from '@material-ui/icons/AddAlarm';
import color from "color";


const Profile = ({matchId}) => {
  const {profileUserData, statusValue, isLoading} = useSelector(store => store.profile)

  if (isLoading === true) {
    return <Preloader/>
  }

  return (
    <div className={s.header}>
      <img className={s.ava} src={profileUserData.photos.large || Kage} alt={''}/>
      <div className={s.info_top}>
        <span>{profileUserData.fullName}</span>
        {!matchId &&

         <BtnStyled primary>
          <NavLink style={{ color: "white" }} to="/EditingProfile">Edit Profile</NavLink>
        </BtnStyled >
          // <Button variant="outlined" size="small">
          //   <NavLink to="/EditingProfile">Edit Profile</NavLink>
          // </Button>
        }
      </div>
      <div className={s.info_middle}>
        <p>{profileUserData.aboutMe}</p>
        {profileUserData.lookingForAJob
          ? <p>I'm looking for a job📣</p>
          : <p>not looking for a job😎</p>}
        <p>{profileUserData.lookingForAJobDescription}</p>
      </div>
      <StatusProfile status={statusValue}/>
      <LinkIcons contacts={profileUserData.contacts}/>
    </div>
  )
}

export default Profile