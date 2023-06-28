import { LazyLoadImage } from 'react-lazy-load-image-component';
import { StreamerModal } from '../../streamerForm/types/types';
import {
  Name,
  WrapperInfo,
  WrapperStreamer,
  Platform,
  Description,
  WrapperHeader,
  ImageWrapper,
} from '../style/StreamerDetailsStyles.styles';

type Props = {
  data: StreamerModal;
};

export const StreamerDetails: React.FC<Props> = ({ data }) => {
  const { description, name, platfromType, urlImg } = data;
  return (
    <WrapperStreamer>
      <ImageWrapper>
        <LazyLoadImage
          src={urlImg}
          alt="Streamer photo"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
          }}
        />
      </ImageWrapper>
      <WrapperInfo>
        <WrapperHeader>
          <Name>{name}</Name>
          <Platform>{platfromType}</Platform>
        </WrapperHeader>
        <Description>{description}</Description>
      </WrapperInfo>
    </WrapperStreamer>
  );
};
