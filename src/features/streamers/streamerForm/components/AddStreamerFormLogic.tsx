import { useFormikContext } from 'formik';
import { useState } from 'react';
import { Button } from '@mui/material';
import { StreamerModal } from '../types/types';
import { AddStreamerFormBody } from './AddStreamerFormBody';
export const AddStreamerFormLogic = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { values, isValid, resetForm, setSubmitting } =
    useFormikContext<StreamerModal>();

  const submitHandler = () => {};

  return (
    <>
      <AddStreamerFormBody
        submitButton={
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            style={{
              width: 'auto',
            }}
          >
            test
          </Button>
        }
      />
    </>
  );
};
