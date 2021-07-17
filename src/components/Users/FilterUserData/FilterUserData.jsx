import {Field, Form, Formik} from "formik";
import CustomField from "../../../Elements/CustomField/CustomField";
import React from "react";
import * as yup from "yup";
import {useDispatch, useSelector} from "react-redux";
import {filterUsersData, getUsersThunkCreators} from "../../../redux/users-reducer";


const FilterUserData = () => {
  const dispatch = useDispatch()

  const currentPage = useSelector(store => store.users.currentPage)

  const Validate = yup.object().shape({
    pageSize: yup.number()
      .max(100, 'not more than a hundred')
  })

  return (
    <Formik
      initialValues={{term: '', friend: '', pageSize: 25,}}
      validationSchema={Validate}
      onSubmit={(values, {setSubmitting}) => {
        dispatch(filterUsersData(values.term, values.friend, values.pageSize));
        dispatch(getUsersThunkCreators(values.pageSize, currentPage, values.term, values.friend))
        setSubmitting(false);
      }}
    >
      {({isSubmitting}) => (
        <Form>
          <CustomField name='term' type='text' text='filter'/>
          <CustomField name='pageSize' type='number' text='page size'/>
          <Field name="friend" as="select" className="my-select">
            <option value="">All</option>
            <option value={true}>follow</option>
            <option value={false}>unfollow</option>
          </Field>
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  )
}

export default FilterUserData