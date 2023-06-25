import { CircularProgress } from '@mui/material';
import { loderColors } from '../../../theme/colors';
import { WrapperLoder } from '../style/LoderStyles.styles';

interface LoaderProps {
  size: string;
}

export const Loader = (props: LoaderProps) => {
  const { size } = props;
  return (
    <WrapperLoder>
      <CircularProgress
        style={{
          display: 'flex',
          width: size,
          height: size,
          color: `${loderColors.firstColorLoder}`,
        }}
      />
    </WrapperLoder>
  );
};
