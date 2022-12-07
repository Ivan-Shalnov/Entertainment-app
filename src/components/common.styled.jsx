import styled from 'styled-components';
export const Container = styled.div`
  margin: 0 auto;
  padding-left: 15px;
  padding-right: 15px;
  max-width: 375px;
  @media screen and (min-width: ${p => p.theme.breakpoints.md}) {
    max-width: 768px;
    padding-left: 25px;
    padding-right: 25px;
  }
  @media screen and (min-width: ${p => p.theme.breakpoints.lg}) {
    max-width: 1440px;
    padding-left: 30px;
    padding-right: 30px;
  }
`;
export const HeaderL = styled.h2`
  margin-bottom: 25px;
  font-weight: 300;
  font-size: 20px;
  line-height: 25px;
  letter-spacing: -0.3125px;
  color: ${p => p.theme.colors.white};
  @media screen and (min-width: ${p => p.theme.breakpoints.md}) {
    font-size: 32px;
    line-height: 40px;
    letter-spacing: -0.5px;
  }
`;
