import React, {useState} from 'react'
import {Formik, Form} from 'formik';
import s from './EditingProfile.module.css'
import {Redirect} from "react-router";
import CustomField from "../../Elements/CustomField/CustomField";


export let EditingProfile = ({putPhoto, profileUserData, putProfile}) => {
const [isEditing, setEditing] = useState(true)
  const [errorMessage, setMessage] = useState(null)

  if (isEditing === false) {
    return <Redirect to='/Content'/>
  }


  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      putPhoto(e.target.files[0])
    }
  }

  return (
    <div>
      <h1>Edit Profile</h1>
      <p>your id is {profileUserData.userId}</p>
      <div className={s.editAva}>
        <p>Chang photo profile</p>
        {<input type="file" onChange={onMainPhotoSelected}/>}
      </div>

      <Formik initialValues={
        {...profileUserData, contacts: {...profileUserData.contacts}}
      }
              onSubmit={async (values) => {
                let res = await putProfile(values)
                if (res.resultCode === 0) {
                  setEditing(false)
                } else {
                  setMessage(res.messages)
                }
              }
              }
      >
        <Form className={s.form}>
          <CustomField text={'Do you looking a job?'} name={'lookingForAJob'} type={'checkbox'}/>
          <CustomField text={"About Me"} name={'aboutMe'} placeholder={"write hear"}/>
          <CustomField text={"looking For A Job Description"}
                       name={'lookingForAJobDescription'}
                       placeholder={"need money"}/>
          <CustomField text={"fullName"} name={'fullName'} placeholder={"samurai"}/>
          <h4>Contacts</h4>
          <CustomField text={"github"} name={'contacts.github'} placeholder={"git"}/>
          <CustomField text={"vk"} name={'contacts.vk'} placeholder={"vk"}/>
          <CustomField text={'facebook'} name={"contacts.facebook"} placeholder={"fes"}/>
          <CustomField text={'instagram'} name={"contacts.instagram"} placeholder={"inst"}/>
          <CustomField text={'twitter'} name={"contacts.twitter"} placeholder={"twitter"}/>
          <CustomField text={'website'} name={"contacts.website"} placeholder={"website"}/>
          <CustomField text={'youtube'} name={"contacts.youtube"} placeholder={"youtube"}/>
          <CustomField text={'mainLink'} name={"contacts.mainLink"} placeholder={"mainLink"}/>
          <p className={s.wornings}>{errorMessage}</p>
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
}


export default EditingProfile;