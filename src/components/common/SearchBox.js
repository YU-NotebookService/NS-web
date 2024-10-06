import React from 'react';
import {
  SearchBtn,
  SearchInput,
  Wrapper,
} from 'styles/common/SearchBox-styled';
import { ReactComponent as SearchIcon } from 'assets/common/searchIcon.svg';

const SearchBox = () => {
  return (
    <Wrapper>
      <SearchInput placeholder="검색어를 입력해주세요." />
      <SearchBtn type="submit">
        <SearchIcon />
      </SearchBtn>
    </Wrapper>
  );
};

export default SearchBox;
