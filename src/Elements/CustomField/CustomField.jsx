import {ErrorMessage, useField} from "formik";
import React from "react";
import s from './CustomeField.module.scss'


const CustomField = ({label, errorMessage, ...props}) => {

  const [field, meta, helpers] = useField(props);
  return (
    <div className={s.root}>
      <div className={s.containerForLabel}>
        <label className={s.label}>{label} </label>
      </div>
      <div className={s.containerForInput}>
        <input {...field} {...props} className={s.input}/>
      </div>
      {meta.touched && meta.error ? (
        <>
          <ErrorMessage text={meta.error}/>
        </>
      ) : null}
    </div>
  );
};

export default CustomField