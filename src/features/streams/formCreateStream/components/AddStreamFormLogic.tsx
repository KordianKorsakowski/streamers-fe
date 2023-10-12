import { useFormikContext } from 'formik';
import { useState } from 'react';
import { useSnackbar } from '../../../../containers/SnackbarContainer';
import { SubmitBtn } from '../../../../components/ui/components/SubmitBtn';
import { StreamModel } from '../../types/type';
import { AddStreamFormBody } from './AddStreamFormBody';

export const AddStreamFormLogic = () => {
  const { setSnackbar } = useSnackbar();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { values, isValid, resetForm, dirty } = useFormikContext<StreamModel>();

  const submitHandler = () => {
    if (isValid) {
      setIsLoading(() => true);
      console.log(values);
    }
  };

  return (
    <>
      <AddStreamFormBody
        submitButton={
          <SubmitBtn
            disabled={!(isValid && dirty)}
            submitFn={submitHandler}
            isLoading={isLoading}
            text={'Add new stream'}
          />
        }
      />
    </>
  );
};
