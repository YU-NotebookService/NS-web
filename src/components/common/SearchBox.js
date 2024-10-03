import React from 'react';
import { Wrapper } from 'styles/common/SearchBox-styled';
import Input from './Input';
import Button from './Button';
import { ReactComponent as SearchIcon } from 'assets/common/searchIcon.svg';

const SearchBox = () => {
  return (
    <Wrapper>
      <Input placeholder="검색어를 입력해주세요." style={{ border: 'none' }} />
      <Button type="submit" style={{ background: 'none', padding: '0px 10px' }}>
        <SearchIcon />
      </Button>
    </Wrapper>
  );
};

export default SearchBox;
