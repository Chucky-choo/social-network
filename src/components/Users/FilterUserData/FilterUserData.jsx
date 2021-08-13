import {Field, Form, Formik} from "formik";
import CustomField from "../../../Elements/CustomField/CustomField";
import React from "react";
import * as yup from "yup";
import {useDispatch, useSelector} from "react-redux";
import s from './FilterUserData.module.scss'
import {getUsersThunkCreators} from "../../../redux/users-reducer";
import BtnStyled from "../../../Elements/BtnStyled/BtnStyled";
import SearchIcon from '@material-ui/icons/Search';

const FilterUserData = ({setQuery, query}) => {
  const dispatch = useDispatch()
  const currentPage = useSelector(store => store.users.currentPage)
  const {count, page, term, friend} = query;


  const Validate = yup.object().shape({
    pageSize: yup.number()
      .max(100, 'not more than a hundred')
  })
  console.error('rerender')
  return (

    <Formik initialValues={{term: term, friend: friend, pageSize: count}}
            validationSchema={Validate}
            onSubmit={(values, {setSubmitting}) => {
              debugger
              setQuery({page: values.pageSize, count: currentPage, term: values.term, friend: values.friend})
              dispatch(getUsersThunkCreators(values.pageSize, currentPage, values.term, values.friend))
              setSubmitting(false);
            }}>
      {({isSubmitting}) => (
        <Form className={s.container}>
          <CustomField value={term}
                       name='term'
                       type='text'
                       text={<SearchIcon/>}
                       placeholder={'Search...'}/>
          <CustomField name='pageSize' type='text' text='page size'/>
          <div className={s.container__select}>
            <Field className="custom-select" name="friend" as="select">
              <option value="">All</option>
              <option value={true}>follow</option>
              <option value={false}>unfollow</option>
            </Field>
          </div>
          <BtnStyled primary type="submit" disabled={isSubmitting}>
            Filter
          </BtnStyled>
        </Form>
      )}
    </Formik>
  )
}

export default FilterUserData