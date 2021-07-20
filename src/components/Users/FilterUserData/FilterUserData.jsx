import {Field, Form, Formik} from "formik";
import CustomField from "../../../Elements/CustomField/CustomField";
import React from "react";
import * as yup from "yup";
import {useDispatch, useSelector} from "react-redux";
import s from './FilterUserData.module.scss'
import Button from "@material-ui/core/Button";
import {filterUsersData, getUsersThunkCreators} from "../../../redux/users-reducer";


const FilterUserData = () => {


  const dispatch = useDispatch()

  const currentPage = useSelector(store => store.users.currentPage)

  const Validate = yup.object().shape({
    pageSize: yup.number()
      .max(100, 'not more than a hundred')
  })

  return (
    <Formik className={s.main}
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
          <CustomField name='term' type='text' text='' placeholder={'Search...'}/>
          <CustomField name='pageSize' type='text' text='page size'/>
          <div className={s.container__select}>
            <Field className="custom-select" name="friend" as="select">
              <option value="">All</option>
              <option value={true}>follow</option>
              <option value={false}>unfollow</option>
            </Field>
            <Button type="submit" variant="outlined"
                    className={s.btn} disabled={isSubmitting}>
              Filter
            </Button>
          </div>

        </Form>
      )}
    </Formik>
  )
}

export default FilterUserData