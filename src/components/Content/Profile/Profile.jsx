import s from './Profile.module.css';
import Kage from '../../../assets/imeges/kage.png'
import {StatusProfile} from "./StausProfile/Status-profile";
import LinkIcons from "./linkIcon/link-ikon";
import {NavLink} from "react-router-dom";
import Preloader from "../../Gif/Preloader/Praloder";

let Profile = ({profileUserData, updateStatus, statusValue, matchId, isLoading}) => {


  if(isLoading === true){
    return <Preloader />
  }

  return (
    <div className={s.header}>
      <img className={s.ava} src={profileUserData.photos.large || Kage} alt={''}/>
      <div className={s.profilText}>
        <h3>{profileUserData.fullName}</h3>
        <p>{profileUserData.aboutMe}</p>
        {profileUserData.lookingForAJobDescription
          ? <p>I'm looking for a job</p>
          : <p>not looking for a job</p>}
        <p>{profileUserData.lookingForAJobDescription}</p>
        {!matchId && <NavLink to="/EditingProfile">Edit Profile</NavLink>}
      </div>
      <LinkIcons contacts={profileUserData.contacts}/>
      <StatusProfile status={statusValue} updateStatus={updateStatus} matchId={matchId}/>
    </div>
  );
}

export default Profile;
