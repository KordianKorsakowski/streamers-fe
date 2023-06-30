import { SubmitBtnStyle } from '../style/SubmitBtnStyles.styles';
import { Loader } from './Loader';

interface SubmitBtnProps {
  disabled: boolean;
  submitFn: () => void;
  isLoading: boolean;
  text: string;
}

export const SubmitBtn: React.FC<SubmitBtnProps> = ({
  disabled,
  submitFn,
  isLoading,
  text,
}) => {
  return (
    <SubmitBtnStyle
      type="submit"
      fullWidth
      variant="contained"
      color="primary"
      onClick={submitFn}
      disabled={disabled}
    >
      {isLoading && <Loader size="2rem" />}
      {text}
    </SubmitBtnStyle>
  );
};
