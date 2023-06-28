import styled from 'styled-components';
import { colors } from '../../../../theme/colors';

export const WrapperStreamer = styled.div`
  display: flex;
  gap: 5rem;
  align-items: flex-start;
  width: max-content;
  margin: auto;
`;

export const WrapperInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 70rem;
`;

export const WrapperHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
  border-bottom: 1px solid ${colors.secondColorBg};
`;

export const ImageWrapper = styled.div`
  width: 30rem;
  height: 30rem;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 0px 24px 5px rgba(255, 255, 255, 1);
`;
export const Name = styled.p`
  font-size: 4rem;
  font-weight: 400;
  letter-spacing: 1px;
`;

export const Platform = styled.p`
  font-size: 3rem;
`;

export const Description = styled.p`
  font-size: 2.4rem;
  width: 70rem;
  overflow-wrap: break-word;
  word-wrap: break-word;
  hyphens: auto;
`;
