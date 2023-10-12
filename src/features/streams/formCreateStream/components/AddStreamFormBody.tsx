import { TextField, Grid, MenuItem } from '@mui/material';
import { useFormikContext } from 'formik';
import React from 'react';
import { StreamModel } from '../../types/type';

interface Props {
  submitButton: JSX.Element;
}

export const AddStreamFormBody: React.FC<Props> = ({ submitButton }) => {
  const { errors, handleBlur, handleChange, handleSubmit, touched, values } =
    useFormikContext<StreamModel>();

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      style={{
        marginTop: '1rem',
        backgroundColor: '#fff',
        width: '600px',
        padding: '20px',
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            name="title"
            label={`Stream's title`}
            value={values.title || ''}
            fullWidth
            helperText={touched.title && errors.title}
            error={Boolean(touched.title && errors.title)}
            onBlur={handleBlur}
            onChange={handleChange}
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            type="string"
            name="description"
            label={'Description'}
            value={values.description || ''}
            fullWidth
            helperText={touched.description && errors.description}
            error={Boolean(touched.description && errors.description)}
            onBlur={handleBlur}
            onChange={handleChange}
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            type="string"
            name="game"
            label={'game'}
            value={values.game || ''}
            fullWidth
            helperText={touched.game && errors.game}
            error={Boolean(touched.game && errors.game)}
            onBlur={handleBlur}
            onChange={handleChange}
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            type="number"
            name="averageViewers"
            label={'Average Viewers'}
            value={values.averageViewers || ''}
            fullWidth
            helperText={touched.averageViewers && errors.averageViewers}
            error={Boolean(touched.averageViewers && errors.averageViewers)}
            onBlur={handleBlur}
            onChange={handleChange}
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            type="datetime-local"
            name="startAt"
            label={'Start'}
            value={values.startAt || ''}
            fullWidth
            helperText={touched.startAt && errors.startAt}
            error={Boolean(touched.startAt && errors.startAt)}
            onBlur={handleBlur}
            onChange={handleChange}
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            type="datetime-local"
            name="endAt"
            label={'End'}
            value={values.endAt || ''}
            fullWidth
            helperText={touched.endAt && errors.endAt}
            error={Boolean(touched.endAt && errors.endAt)}
            onBlur={handleBlur}
            onChange={handleChange}
            required
          />
        </Grid>
      </Grid>
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          padding: '2rem 0 0 0',
        }}
      >
        {submitButton}
      </div>
    </form>
  );
};
