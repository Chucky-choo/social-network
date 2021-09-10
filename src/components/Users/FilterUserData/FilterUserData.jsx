import {Field, Form, Formik} from "formik";
import CustomField from "../../../Elements/CustomField/CustomField";
import React from "react";
import * as yup from "yup";
import {useDispatch, useSelector} from "react-redux";
import s from './FilterUserData.module.scss'
import {getUsersThunkCreators} from "../../../redux/users-reducer";
import BtnStyled from "../../../Elements/BtnStyled/BtnStyled";
import SearchIcon from '@material-ui/icons/Search';
import MyTextField from "../../../Elements/MyTextField/myTextField";

const FilterUserData = ({setQuery, query}) => {
	const dispatch = useDispatch()
	const currentPage = useSelector(store => store.users.currentPage)
	const {page, count, term} = query;


	const Validate = yup.object().shape({
		pageSize: yup.number('only nambers')
			.max(100, 'max 100')
	})
	return (

		<Formik
			initialValues={{pageSize: count, term: term}}
			validationSchema={Validate}
			onSubmit={(values, {setSubmitting}) => {
				setQuery({page: currentPage, count: values.pageSize, term: values.term})
				dispatch(getUsersThunkCreators(currentPage, values.pageSize, values.term))
				setSubmitting(false);
			}}
		>
			{({isSubmitting}) => (
				<Form className={s.container}>
					<CustomField
						name='term'
						type='text'
						text={<SearchIcon/>}
						placeholder={'Search...'}
					/>
					<CustomField
						placeholder={'number of cards per page'}
						name='pageSize'
						type='number'
						text='page size'
					/>
					<BtnStyled
						primary
						type="submit"
						disabled={isSubmitting}
					>
						Filter
					</BtnStyled>
				</Form>
			)}
		</Formik>
	)
}

export default FilterUserData