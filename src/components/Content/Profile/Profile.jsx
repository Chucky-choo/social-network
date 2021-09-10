import {useSelector} from "react-redux";
import s from "./Profile.module.scss";
import Kage from "../../../assets/imeges/kage.png";
import {NavLink} from "react-router-dom";
import LinkIcons from "./linkIcon/link-ikon";
import {StatusProfile} from "./StausProfile/Status-profile";
import Preloader from "../../../Elements/Preloader/Praloder";
import BtnStyled from "../../../Elements/BtnStyled/BtnStyled";


const Profile = ({matchId}) => {
  const {profileUserData, statusValue, isLoading} = useSelector(store => store.profile)


  if (isLoading === true) {
    return <Preloader/>
  }

  return (
    <div className={s.header}>
      <img className={s.ava} src={profileUserData.avatar_url || Kage} alt={''}/>
      <div className={s.info_top}>
        <span>{profileUserData.login}</span>
        {!matchId &&
         <BtnStyled>
          <NavLink style={{ color: "black" }} to="/EditingProfile">Edit Profile</NavLink>
        </BtnStyled >
        }
      </div>
      <div className={s.info_middle}>
        <p>{profileUserData.aboutMe}</p>
        {profileUserData.lookingForAJob
          ? <p>I'm looking for a job📣</p>
          : <p>not looking for a job😎</p>}
        <p>{profileUserData.lookingForAJobDescription}</p>
      </div>
     {/*<StatusProfile status={statusValue}/>*/}
      <LinkIcons email={profileUserData.email} gitHubURL={profileUserData.html_url} />
    </div>
  )
}

export default Profile