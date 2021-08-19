import React, {useState} from 'react'
import s from './EditingProfile.module.scss'
import {Redirect} from "react-router";
import {useSelector} from "react-redux";
import EditPhotoProfile from "./EditPhotoProfile/EditPhotoProfile";
import EditDataProfile from "./EditDataProfile/EditDataProfile";


export const EditingProfile = () => {
  const profileUserData = useSelector(store => store.auth.profileUserData)


  const [isEditing, setEditing] = useState(true)


  if (isEditing === false) {
    return <Redirect to='/Content'/>
  }


  return (
    <div className={s.main}>
      <div className={s.main__container}>
        <EditPhotoProfile profileUserData={profileUserData}/>
        <EditDataProfile profileUserData={profileUserData} setEditing={setEditing}/>
      </div>
    </div>
  );
}


export default EditingProfile;
