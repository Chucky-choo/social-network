import {ErrorMessage, Field} from "formik";
import React from "react";
import s from './CustomeField.module.scss'

const CustomField = ({text, name, placeholder, type}) => {

  if (type === 'checkbox') {
    return (
      <div className={s.switch__container}>
        <div className="form-check form-switch">
          <Field name={name} className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/>
          <label className={s.label} htmlFor="flexSwitchCheckDefault">{text}</label>
        </div>
      </div>
    )
  }


  return (
    <div className={s.input__container}>
      <label className={s.label}>{text}</label>
      <Field name={name}
             placeholder={placeholder}
             type={type}
             className="form-control"
      />
      <ErrorMessage name={name} component="div" className={s.errors}/>
    </div>
  )
}

export default CustomField