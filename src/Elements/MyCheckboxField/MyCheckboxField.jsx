import {useField} from "formik";
import s from './MyCheckboxField.scss'


export const MyCheckboxField = ({label, ...props}) => {

  const [field, meta, helpers] = useField(props);


  return (
    <div className={s.root}>
      <input {...field} {...props} />
      <label className={s.root}>
        {label}
      </label>


      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}

    </div>
  );
};
