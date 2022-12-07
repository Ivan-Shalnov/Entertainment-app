import styled from 'styled-components';
export const Wrap = styled.span`
  display: inline-block;
  width: 25px;
  padding: 2px;
  border-radius: 50%;
  background-color: ${p => p.theme.colors.white};
  transition: ${p => p.theme.transition};
  cursor: pointer;
  &:hover {
    transform: scale(1.75);
  }
`;
