import { WrapperInfo } from '../style/InfoTextStyles.styles';

type Props = {
  text: string;
};

export const InfoText: React.FC<Props> = ({ text }) => {
  return (
    <WrapperInfo>
      <p>{text}</p>
    </WrapperInfo>
  );
};
