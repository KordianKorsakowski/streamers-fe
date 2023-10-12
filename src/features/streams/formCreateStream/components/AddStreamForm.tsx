import { CreateStreamModel } from '../../types/type';
import { AddStreamFormConfig } from './AddStreamFormConfig';
import { AddStreamFormLogic } from './AddStreamFormLogic';

export const AddStreamForm = () => {
  const initialValues: CreateStreamModel = {
    title: '',
    description: '',
    averageViewers: 100,
    game: '',
    endAt: new Date(),
    startAt: new Date(),
  };
  return (
    <>
      <AddStreamFormConfig initialValues={initialValues}>
        <AddStreamFormLogic />
      </AddStreamFormConfig>
    </>
  );
};
