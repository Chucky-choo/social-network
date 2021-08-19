import {useField} from "formik";
import {makeStyles} from "@material-ui/core/styles";
import ErrorMessage from "../ErrorMesage/ErrorMessage";

const useStyles = makeStyles({
  in: {
    background: 'linear-gradient(45deg, #6dd5fa, #ffffff);',
    color: '#000000',
    width: 300,
    height: 50,
    border: "none",
    borderRadius: 6,
    padding: '12px 20px',
    outline: "none",
    fontSize: 20,
    margin: '8px 0',

    '&:focus': {
      background: '#ffffff',
    },

    '&::placeholder' :{
      color: '#2980B9',
    }
  },
})


const MyTextField = ({label, errorMessage, ...props}) => {
  const c = useStyles()

  const [field, meta, helpers] = useField(props);
  return (
    <>
      <label>
        {label}
        <input {...field} {...props} className={c.in}/>
      </label>
      {meta.touched && meta.error ? (
        <>
         <ErrorMessage text={meta.error}/>
        </>


      ) : null}
    </>
  );
};

export default MyTextField