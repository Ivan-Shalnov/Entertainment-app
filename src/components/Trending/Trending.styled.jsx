import { HeaderL } from 'components/common.styled';
import styled from 'styled-components';
import { Swiper } from 'swiper/react';
export const Section = styled.section`
  margin-bottom: 25px;
  @media screen and (min-width: ${p => p.theme.breakpoints.md}) {
    margin-bottom: 40px;
  }
`;

export const Header = styled(HeaderL)`
  margin-bottom: 15px;
`;
export const SwiperStyled = styled(Swiper)`
  max-width: ${p => p.theme.breakpoints.sm};
  padding-left: ${p => p.theme.gap};
  @media screen and (min-width: ${p => p.theme.breakpoints.md}) {
    max-width: ${p => p.theme.breakpoints.md};
  }
  @media screen and (min-width: ${p => p.theme.breakpoints.lg}) {
    max-width: 100%;
  }
`;
