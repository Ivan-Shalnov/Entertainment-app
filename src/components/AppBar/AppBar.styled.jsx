import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const Bar = styled.header`
  margin-bottom: 25px;

  background-color: ${p => p.theme.colors.semiDarkBlue};

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 20px;
    padding-bottom: 20px;
  }
  @media screen and (min-width: ${p => p.theme.breakpoints.md}) {
    div {
      padding-top: 25px;
      padding-bottom: 25px;
    }
  }
  @media screen and (min-width: ${p => p.theme.breakpoints.lg}) {
    margin-bottom: 0;
    position: fixed;
    top: 30px;
    left: 30px;
    height: calc(100vh - 60px);
    border-radius: 20px;
    div {
      box-sizing: border-box;
      padding: 30px;
      height: 100%;
      flex-direction: column;
    }
  }
`;
export const LogoLink = styled(Link)`
  display: block;
  width: 25px;
  height: 20px;
`;
