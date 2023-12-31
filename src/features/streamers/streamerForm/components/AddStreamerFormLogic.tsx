import { useFormikContext } from 'formik';
import { useState } from 'react';
import { StreamerModal } from '../types/types';
import { AddStreamerFormBody } from './AddStreamerFormBody';
import { createStreamer } from '../../../../api/streamers/createStremer';
import { useSnackbar } from '../../../../containers/SnackbarContainer';
import { SubmitBtn } from '../../../../components/ui/components/SubmitBtn';
import { useStreamers } from '../../../../containers/StreamersContainer';

export const AddStreamerFormLogic = () => {
  const { setSnackbar } = useSnackbar();
  const { setReloadList, setIsOpenForm } = useStreamers();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { values, isValid, resetForm, dirty } =
    useFormikContext<StreamerModal>();

  const submitHandler = () => {
    if (isValid) {
      setIsLoading(() => true);
      createStreamer(values)
        .then(() => {
          setSnackbar({
            text: 'Success, you added new streames',
            type: 'success',
          });
          setReloadList(() => true);
          setIsOpenForm(false);
        })
        .catch((e) => {
          setSnackbar({
            text: e.response?.data.message || 'Unhandled error',
            type: 'error',
          });
        })
        .finally(() => {
          setIsLoading(() => false);
          resetForm();
        });
    }
  };

  return (
    <>
      <AddStreamerFormBody
        submitButton={
          <SubmitBtn
            disabled={!(isValid && dirty)}
            submitFn={submitHandler}
            isLoading={isLoading}
            text={'Add new streamer'}
          />
        }
      />
    </>
  );
};
