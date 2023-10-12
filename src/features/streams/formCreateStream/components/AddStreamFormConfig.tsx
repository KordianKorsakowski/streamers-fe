import { Formik } from 'formik';
import * as Yup from 'yup';
import { PropsWithChildren } from 'react';
import { CreateStreamModel } from '../../types/type';

type Props = PropsWithChildren<{
  initialValues: CreateStreamModel;
}>;

export const AddStreamFormConfig = (props: Props) => {
  const { children, initialValues } = props;
  const validation = Yup.object().shape({
    title: Yup.string().max(30).trim().required('Name is requierd'),
    description: Yup.string()
      .max(255)
      .trim()
      .required('Description is requierd'),
    startAt: Yup.date().required('startAt is requierd'),
    endAt: Yup.date().required('endAt is requierd'),
    game: Yup.string().max(30).trim().required('game is requierd'),
    averageViewers: Yup.number().required('average viewers is requierd'),
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
