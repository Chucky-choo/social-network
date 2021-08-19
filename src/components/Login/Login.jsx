import React, {useEffect} from 'react';
import {Formik, Form} from 'formik';
import MyTextField from "../../Elements/MyTextField/myTextField";
import * as yup from "yup";
import {useDispatch, useSelector} from "react-redux";
import {postAuthLoginTC} from "../../redux/header-reducer";
import {MyCheckboxField} from "../../Elements/MyCheckboxField/MyCheckboxField";
import userIcon from '../../assets/icons/Без имени.png'
import ErrorMessage from "../../Elements/ErrorMesage/ErrorMessage";
import styled from "styled-components";
import BtnStyled from "../../Elements/BtnStyled/BtnStyled";
import {useStyles} from "./LoginStyles";
import {useHistory} from "react-router";


export const LoginBtn = styled(BtnStyled)`
  margin: 8px;
  width: 300px;
  height: 50px;
  display: flex;
  justify-content: center;
`


const Login = () => {
  const history = useHistory();
  const isAuth = useSelector(store => store.auth.isAuth)

  useEffect(() => {
    if(isAuth){history.push({pathname: '/Content',});}
    }, [isAuth])


  const dispatch = useDispatch()
  const c = useStyles()

  const captchaURL = useSelector(store => store.auth.captchaURL)
  const errorMessage = useSelector(store => store.auth.errorMessage)

  const Validatione = yup.object().shape({
    password: yup.string().min(8, 'not enough characters').required('required'),
    email: yup.string().email().required('required'),
  })


  return (
    <Formik
      initialValues={{password: '', email: '', rememberMe: true, captcha: ''}}
      validationSchema={Validatione}
      onSubmit={(values, {setSubmitting}) => {
          dispatch(postAuthLoginTC(values))
          setSubmitting(false);
      }}
    >
      <Form className={c.root}>
        <div className={c.container}>
          <img src={userIcon} alt="" className={c.icon}/>
          <h1 className={c.h1}>Sign in</h1>
          <MyTextField type='email' name='email' placeholder='Email' errorMessage={errorMessage}/>
          <MyTextField type='password' name='password' placeholder='Password' errorMessage={errorMessage}/>
          <LoginBtn primary type="submit">Submit</LoginBtn>
          {errorMessage && <ErrorMessage text={errorMessage}/>}
          {captchaURL && <img className={c.captcha} src={captchaURL} alt=''/>}
          {captchaURL && <MyTextField placeholder={'write captcha hear'} name='captcha'/>}
          <div className={c.footer}>
            <MyCheckboxField type='checkbox' name='rememberMe' label='Remember me'/>
            <p>Forget password?</p>
          </div>
          <a id='signUp' href="https://social-network.samuraijs.com/signUp" className={c.link} >
            Create Account
          </a>
        </div>
      </Form>
    </Formik>
  );
};

export default Login