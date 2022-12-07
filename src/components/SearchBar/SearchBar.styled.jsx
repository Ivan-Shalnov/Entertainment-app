import styled from 'styled-components';
import { ReactComponent as SearchIcon } from 'assets/icon-search.svg';
export const Wrap = styled.div`
  margin-bottom: 25px;
  display: flex;
  gap: 25px;
`;
export const IconStyled = styled(SearchIcon)`
  width: 18px;
  display: inline-block;
  @media screen and (min-width: ${p => p.theme.breakpoints.md}) {
    width: 32px;
  }
`;
export const InputStyled = styled.input`
  padding: 0;
  flex-grow: 1;
  background-color: transparent;
  border: none;
  color: ${p => p.theme.colors.white};
  opacity: 0.5;
  transition: ${p => p.theme.transition};
  font-weight: 300;
  font-size: 16px;
  line-height: 20px;
  &:focus {
    opacity: 1;
    outline: none;
    padding-bottom: 0.6em;
    border-bottom: 1px solid ${p => p.theme.colors.greyishBlue};
  }
  &:not(:placeholder-shown) {
    opacity: 1;
  }
  @media screen and (min-width: ${p => p.theme.breakpoints.md}) {
    font-size: 24px;
    line-height: 30px;
  }
`;
