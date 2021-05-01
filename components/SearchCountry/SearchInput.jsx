import React from 'react';
import styled from '@emotion/native';
import { palette } from '../../style/palette';
import { Svg } from '../../assets';
import FontTextInput from '../common/FontTextInput';

const SearchInput = () => {
  return (
    <SearchInputWrapper>
      <Svg name={'search'} />
      <Input
        value={'123'}
        placeholder={'나라를 검색해보세요'}
        maxLength={11}
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
