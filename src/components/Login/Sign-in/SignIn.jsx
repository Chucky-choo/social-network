import React from 'react';
import {Formik, Form, ErrorMessage} from 'formik';
import s from './Sign-in.module.css'
import {useDispatch, useSelector} from "react-redux";
import {postAuthLoginTC} from "../../../redux/header-reducer";
import CustomField from "../../../Elements/CustomField/CustomField";
import * as yup from 'yup'
import st from '../SignUpForm/SignUp.module.scss'


const SignIn = () => {
  const captchaURL = useSelector(store => store.auth.captchaURL)
  const errorMessage = useSelector(store => store.auth.errorMessage)

  const dispatch = useDispatch()

  const Validatione = yup.object().shape({
    password: yup.string().required('required'),
    email: yup.string().email().required('required'),
  })

  return (
    <div>
      <Formik initialValues={{
        email: '',
        password: '',
        rememberMe: true,
        captcha: ''
      }}
              validationSchema={Validatione}
              onSubmit={(values, {setSubmitting}) => {
                dispatch(postAuthLoginTC(values))
                setSubmitting(false);
              }}
      >
        {({isSubmitting, values}) => (
          <Form className={st.form}>
            <h1>Entrance</h1>
            <CustomField text={'email'}
                         placeholder="email@mail.com" type="email" name="email"/>
            <CustomField text={'password'}
                         placeholder="password" type="password" name="password"/>
            <CustomField text={'remember me?'} name={'rememberMe'} type={'checkbox'}/>
            <button type="submit" disabled={isSubmitting} className={s.btn}>
              Submit
            </button>
            {captchaURL && <img className={s.captcha} src={captchaURL} alt=''/>}
            {captchaURL && <CustomField text={'write captcha hear'} name={'captcha'}/>}
            <h3 className={st.errors}>{errorMessage}</h3>
          </Form>
        )}
      </Formik>
    </div>
  );
}


export default SignIn;