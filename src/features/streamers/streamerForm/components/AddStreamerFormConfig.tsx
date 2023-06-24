import { Formik } from 'formik';
import * as Yup from 'yup';
import { PropsWithChildren } from 'react';

import { StreamerModal } from '../types/types';

type Props = PropsWithChildren<{
  initialValues: StreamerModal;
}>;

export const AddStreamerFormConfig = (props: Props) => {
  const { children, initialValues } = props;
  const validation = Yup.object().shape({
    name: Yup.string().max(50).trim().required('Name is requierd'),
    platfromType: Yup.string().max(10).trim().required('Platfrom is requierd'),
    description: Yup.string()
      .max(255)
      .trim()
      .required('Description is requierd'),
  });

  return (
    <Formik
      initialValues={initialValues}
      validateOnMount
      validationSchema={validation}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(true);
      }}
    >
      {children}
    </Formik>
  );
};
