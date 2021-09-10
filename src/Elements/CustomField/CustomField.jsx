import {useField} from "formik";
import React from "react";
import s from './CustomeField.module.scss'
import classNames from 'classnames/bind';
import ErrorMessage from "../ErrorMesage/ErrorMessage";


const CustomField = ({label, errorMessage, ...props}) => {
	const cx = classNames.bind(s);

	let labelClasses = cx(
		{
			containerForLabel: label,
			none: !label
		}
	);


	const [field, meta, helpers] = useField(props);
	debugger
	return (
		<div className={s.root}>
			<div className={labelClasses}>
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