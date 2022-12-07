import { HeaderL } from 'components/common.styled';
import styled from 'styled-components';

export const Header = styled(HeaderL)`
  margin-bottom: 25px;
`;
export const List = styled.ul`
  margin-bottom: 60px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
`;
