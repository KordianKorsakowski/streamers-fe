import { TextField, Grid, MenuItem } from '@mui/material';
import { useFormikContext } from 'formik';
import React, { useState } from 'react';
import { PLATFORM_OPTIONS } from '../constants/constants';
import { StreamerModal } from '../types/types';
import {
  CollapseStyle,
  ContainerForm,
} from '../style/AddStreamerStyles.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';

interface Props {
  submitButton: JSX.Element;
}

export const AddStreamerFormBody: React.FC<Props> = ({ submitButton }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { errors, handleBlur, handleChange, handleSubmit, touched, values } =
    useFormikContext<StreamerModal>();

  return (
    <ContainerForm>
      <CollapseStyle onClick={() => setIsOpen(!isOpen)}>
        <p style={{ fontWeight: '400' }}>Add stremer</p>
        {!isOpen && <FontAwesomeIcon icon={faArrowDown} />}
        {isOpen && <FontAwesomeIcon icon={faArrowUp} />}
      </CollapseStyle>
      {isOpen && (
        <form noValidate onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                name="name"
                label={`Streamer's name`}
                value={values.name || ''}
                fullWidth
                helperText={touched.name && errors.name}
                error={Boolean(touched.name && errors.name)}
                onBlur={handleBlur}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                select
                name="platfromType"
                label={'Platfrom type'}
                value={values.platfromType || ''}
                fullWidth
                helperText={touched.platfromType && errors.platfromType}
                error={Boolean(touched.platfromType && errors.platfromType)}
                onBlur={handleBlur}
                onChange={handleChange}
                required
              >
                {PLATFORM_OPTIONS.map(
                  (item: { value: string; label: string }, index: number) => (
                    <MenuItem key={index} value={item.value}>
                      {item.label}
                    </MenuItem>
                  )
                )}
              </TextField>
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
      )}
    </ContainerForm>
  );
};
