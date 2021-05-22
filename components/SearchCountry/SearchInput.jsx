import React from 'react';
import styled from '@emotion/native';
import { palette } from '../../style/palette';
import { Svg } from '../../assets';
import FontTextInput from '../common/FontTextInput';

const SearchInput = (props) => {
  const {searchKeyword, onChangeSearchKeyword} = props;

  return (
    <SearchInputWrapper>
      <Svg name={'search'} />
      <Input
        value={searchKeyword}
        placeholder={'나라를 검색해보세요'}
        maxLength={11}
        onChangeText={onChangeSearchKeyword}
      />
    </SearchInputWrapper>
  );
};

export default SearchInput;

const SearchInputWrapper = styled.View`
  flex-direction: row;
  padding-bottom: 9px;
  border-bottom-width: 1px;
  border-bottom-color: ${palette.darkbrown};
`;

const Input = styled(FontTextInput)`
  font-size: 17px;
  margin-left: 8px;
`;
