import styled from 'styled-components';
import { colors } from '../../../../theme/colors';
import { device } from '../../../../theme/breakpoints';

export const WrapperStreamer = styled.div`
  display: flex;
  gap: 2rem;
  align-items: flex-start;
  width: max-content;
  margin: auto;
  @media ${device.tablet} {
    align-items: center;
  }
  @media ${device.mobileL} {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const WrapperInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100rem;
  @media ${device.laptopL} {
    width: 70rem;
  }
  @media ${device.laptop} {
    width: 60rem;
  }
  @media ${device.tablet} {
    width: 35rem;
  }
  @media ${device.mobileS} {
    width: 30rem;
  }
`;

export const WrapperHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
  border-bottom: 1px solid ${colors.secondColorBg};
  @media ${device.laptop} {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const ImageWrapper = styled.div`
  width: 30rem;
  height: 30rem;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 0px 24px 5px rgba(255, 255, 255, 1);
  @media ${device.laptop} {
    width: 20rem;
    height: 20rem;
  }
  @media ${device.mobileL} {
    width: 10rem;
    height: 10rem;
  }
`;
export const Name = styled.p`
  font-size: 4rem;
  font-weight: 400;
  letter-spacing: 1px;
  @media ${device.laptop} {
    font-size: 3rem;
  }
  @media ${device.laptop} {
    font-size: 2.4rem;
  }
  @media ${device.mobileL} {
    font-size: 2rem;
  }
`;

export const Platform = styled.p`
  font-size: 3rem;
  @media ${device.laptop} {
    font-size: 2rem;
  }
  @media ${device.mobileL} {
    font-size: 1.6rem;
  }
`;

export const Description = styled.p`
  font-size: 2.4rem;
  width: 100%;
  overflow-wrap: break-word;
  word-wrap: break-word;
  hyphens: auto;
  @media ${device.mobileL} {
    font-size: 1.6rem;
  }
`;
