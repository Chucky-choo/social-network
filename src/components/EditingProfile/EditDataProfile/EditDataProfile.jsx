import React, {useState} from 'react';
import {Form, Formik} from "formik";
import s from './EditDataProfile.module.scss'
import CustomField from "../../../Elements/CustomField/CustomField";
import BtnStyled from "../../../Elements/BtnStyled/BtnStyled";
import {useDispatch} from "react-redux";
import MyTextField from "../../../Elements/MyTextField/myTextField";
import {MyCheckboxField} from "../../../Elements/MyCheckboxField/MyCheckboxField";
import styled from "styled-components";


export const EditBtnStyled = styled(BtnStyled)`
  margin: 8px;
  width: 150px;
  height: 35px;
  display: flex;
  justify-content: center;
`



const EditDataProfile = ({profileUserData, setEditing}) => {
  const dispatch = useDispatch()

  const [errorMessage, setMessage] = useState(null)

  return (
    <Formik initialValues={
      {...profileUserData, contacts: {...profileUserData.contacts}}
    }
      // onSubmit={async (values) => {
      //   const res = await dispatch(putProfile(values))
      //   if (res.resultCode === 0) {
      //     setEditing(false)
      //   } else {
      //     setMessage(res.messages)
      //   }
      // }
      // }
            onSubmit={(values, {setSubmitting}) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
            }}
    >
      <Form className={s.form}>
        <CustomField label={"Name"} name={'fullName'} placeholder={"samurai"}/>
        <CustomField label={'Website'} name={"contacts.website"} placeholder={"website"}/>
        <CustomField label={"Bio"} name={'aboutMe'} placeholder={"write hear"}/>

        <CustomField label={"looking For A Job Description"}
                     name={'lookingForAJobDescription'}
                     placeholder={"need money"}/>
        <CustomField label={"github"} name={'contacts.github'} placeholder={"git"}/>
        <CustomField label={"vk"} name={'contacts.vk'} placeholder={"vk"}/>
        <CustomField label={'facebook'} name={"contacts.facebook"} placeholder={"fes"}/>
        <CustomField label={'instagram'} name={"contacts.instagram"} placeholder={"inst"}/>
        <CustomField label={'twitter'} name={"contacts.twitter"} placeholder={"twitter"}/>
        <CustomField label={'youtube'} name={"contacts.youtube"} placeholder={"youtube"}/>
        <CustomField label={'mainLink'} name={"contacts.mainLink"} placeholder={"mainLink"}/>
        <div className={s.checkbox}>
          <MyCheckboxField label={'Do you looking a job?'} name={'lookingForAJob'} type={'checkbox'}/>
          <p className={s.wornings}>{errorMessage}</p>
          <EditBtnStyled primary type="submit">Submit</EditBtnStyled>
        </div>


      </Form>
    </Formik>
  );
};

export default EditDataProfile;
