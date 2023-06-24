import { StreamerModal } from '../types/types';
import { AddStreamerFormConfig } from './AddStreamerFormConfig';
import { AddStreamerFormLogic } from './AddStreamerFormLogic';

export const AddStreamerForm = () => {
  const initialValues: StreamerModal = {
    name: '',
    platfromType: '',
    description: '',
  };
  return (
    <>
      <AddStreamerFormConfig initialValues={initialValues}>
        <AddStreamerFormLogic />
      </AddStreamerFormConfig>
    </>
  );
};
