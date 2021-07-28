import {Field, Form, Formik} from "formik";
import CustomField from "../../../Elements/CustomField/CustomField";
import React from "react";
import * as yup from "yup";
import {useDispatch, useSelector} from "react-redux";
import s from './FilterUserData.module.scss'
import {filterUsersData, getUsersThunkCreators} from "../../../redux/users-reducer";
import BtnStyled from "../../../Elements/BtnStyled/BtnStyled";
import SearchIcon from '@material-ui/icons/Search';

const FilterUserData = () => {
  const dispatch = useDispatch()

  const currentPage = useSelector(store => store.users.currentPage)

  const Validate = yup.object().shape({
    pageSize: yup.number()
      .max(100, 'not more than a hundred')
  })

  return (
    <Formik initialValues={{term: '', friend: '', pageSize: 25,}}
            validationSchema={Validate}
            onSubmit={(values, {setSubmitting}) => {
              dispatch(filterUsersData(values.term, values.friend, values.pageSize));
              dispatch(getUsersThunkCreators(values.pageSize, currentPage, values.term, values.friend))
              setSubmitting(false);
            }}>
      {({isSubmitting}) => (
        <Form className={s.container}>
          <CustomField name='term' type='text' text={<SearchIcon />} placeholder={'Search...'}/>
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