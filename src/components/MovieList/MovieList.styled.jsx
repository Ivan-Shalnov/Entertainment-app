import styled from 'styled-components';
export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
  @media screen and (min-width: ${p => p.theme.breakpoints.md}) {
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
  }
  @media screen and (min-width: ${p => p.theme.breakpoints.lg}) {
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;
  }
`;
