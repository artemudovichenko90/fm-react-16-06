import React from 'react';
import { Form, Formik } from 'formik';
import { SCHEMA_SING_IN } from '../../../utils/schemaValidation';
import styles from './SignForm.module.scss';
import WrappedInput from '../WrappedInput';

const initialValues = { email: '', password: '' };
const SignForm = (props) => {
  const onSubmit = (values, formikBag) => {
    // console.group();
    // console.log('values: ', values);
    // console.log('formikBag: ', formikBag);
    // console.groupEnd();
    formikBag.resetForm();
  }
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={SCHEMA_SING_IN}
      onSubmit={onSubmit}>
      {
        (formikProps) => {
          console.log('formikProps:', formikProps);
          return (
            <Form className={styles.form}>
              <WrappedInput name="email" placeholder="Enter email" />
              <WrappedInput name="password" placeholder="Enter password" />
              <WrappedInput name="passwordConfirm" placeholder="Repeat password" />

              <input type="submit" value="send" />
            </Form>
          );
        }
      }
    </Formik>
  );
}

export default SignForm;
