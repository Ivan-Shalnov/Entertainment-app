import { Container } from 'components/common.styled';
import { useState } from 'react';
import { IconStyled, InputStyled, Wrap } from './SearchBar.styled';
export const SearchBar = ({ handleFilter, placeholder }) => {
  const [inputValue, setInputValue] = useState('');
  const handleInputChange = e => {
    const { value } = e.target;
    setInputValue(value);
    handleFilter(value);
  };
  return (
    <Container>
      <Wrap>
        <IconStyled />
        <InputStyled
          type="text"
          name="search"
          placeholder={placeholder}
          value={inputValue}
          onChange={handleInputChange}
        />
      </Wrap>
    </Container>
  );
};
