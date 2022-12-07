import styled from 'styled-components';
export const AppContainer = styled.div`
  @media screen and (min-width: ${p => p.theme.breakpoints.lg}) {
    display: flex;
    gap: 35px;
  }
`;
