import { useId } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const initialValues = {
  name: '',
  number: '',
};

const ContactFormSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  number: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

export default function ContactForm({ onSubmit }) {
  const nameFieldId = useId();
  const numberFieldId = useId();

  const handleSubmit = (values, actions) => {
    onSubmit(values);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={ContactFormSchema}
    >
      <Form className="box form">
        <label htmlFor={nameFieldId}>Name</label>
        <Field type="text" name="name" id={nameFieldId} />
        <ErrorMessage name="name" className="error" component="div" />
        <label htmlFor={numberFieldId}>Number</label>
        <Field type="tel" name="number" id={nameFieldId} />
        <ErrorMessage name="number" className="error" component="div" />
        <button type="submit" className="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
