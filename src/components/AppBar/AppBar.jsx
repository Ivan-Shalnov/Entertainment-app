import { Container } from 'components/common.styled';
import { Logo } from 'components/Logo/Logo';
import { Bar, LogoLink } from './AppBar.styled';
import { Avatar } from './Avatar';
import { Navigation } from './Navigation';
export const AppBar = () => {
  return (
    <Bar>
      <Container className="container">
        <LogoLink to="/">
          <Logo />
        </LogoLink>
        <Navigation />
        <Avatar />
      </Container>
    </Bar>
  );
};
