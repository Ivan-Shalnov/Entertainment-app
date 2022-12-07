import avatar from 'assets/image-avatar.png';
import { Wrap } from './Avatar.styled';
export const Avatar = () => {
  const imgSrc = avatar;
  const name = 'User name';
  return (
    <Wrap>
      <img src={imgSrc} alt={name} />
    </Wrap>
  );
};
