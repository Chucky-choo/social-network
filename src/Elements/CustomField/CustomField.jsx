import {ErrorMessage, Field} from "formik";
import React from "react";
import s from './CustomeField.module.css'

let CustomField = ({text, name, placeholder, type}) => {
  return (
    <>
      <div>
        <label className={s.body}>{text}</label>
        <Field name={name}
               placeholder={placeholder}
               type={type}
        />
      </div>
      <ErrorMessage name={name} component="div" className={s.errors}/>
    </>


  )
}

export default CustomField