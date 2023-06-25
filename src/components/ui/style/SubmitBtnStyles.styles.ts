import { Button } from '@mui/material';
import styled from 'styled-components';
import { colors } from '../../../theme/colors';

export const SubmitBtnStyle = styled(Button)<{ disabled: boolean }>`
  max-width: max-content;
  display: flex;
  gap: 1rem;
  cursor: ${({ disabled }) => (disabled ? `not-allowed` : `pointer`)};
  color: ${colors.firstColorFont};
`;
