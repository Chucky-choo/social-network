import {ErrorMessage, Field} from "formik";
import React from "react";
import s from './CustomeField.module.scss'

let CustomField = ({text, name, placeholder, type}) => {
  return (
    <div className={s.input__container}>
      <label>{text}</label>
      <Field name={name}
             placeholder={placeholder}
             type={type}/>
      <ErrorMessage name={name} component="div" className={s.errors}/>
    </div>


  )
}

export default CustomField