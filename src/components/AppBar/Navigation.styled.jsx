import styled from 'styled-components';
export const List = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 25px;
  color: ${p => p.theme.colors.greyishBlue};

  a {
    display: block;
    width: 16px;
    transition: ${p => p.theme.transition};
    color: inherit;

    &:hover,
    &:focus,
    &:active {
      transform: scale(1.3);
      color: ${p => p.theme.colors.white};
    }
    @media screen and (min-width: ${p => p.theme.breakpoints.md}) {
      width: 20px;
    }
  }
  @media screen and (min-width: ${p => p.theme.breakpoints.lg}) {
    flex-direction: column;
  }
`;
