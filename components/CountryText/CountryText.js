import React, { useCallback } from 'react';
import { Pressable } from 'react-native';
import styled from '@emotion/native';
import { useNavigation } from '@react-navigation/native';
import { COMPONENT_TYPE } from '../../constants/types';
import { FontText } from '../common';
import { palette } from '../../style/palette';

const Country = ({ type }) => {
  const navigation = useNavigation()
  const onPressCountryText = useCallback(() => {
    navigation.navigate('SearchCountry')
  }, [navigation])

  return (
    <CountryView>
      <CountryFlagImageWrapper>
        <CountryImage
          source={
            'https://tripinmyroom.s3.ap-northeast-2.amazonaws.com/flags/etc.svg'
          }
        />
      </CountryFlagImageWrapper>
      <Pressable onPress={onPressCountryText}>
        <CountryText empty={true}>여행한 나라</CountryText>
      </Pressable>
    </CountryView>
  );
};

export default Country;

const CountryView = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`;

const CountryFlagImageWrapper = styled.View`
  width: 24px;
  height: 16px;
  border: 1px solid ${palette.darkbrown};
  background: ${palette.background};
`;

const CountryImage = styled.Image``;

const CountryText = styled(FontText)`
  margin-left: 8px;
  line-height: 28px;
  font-size: 16px;
  color: ${({ empty }) => (empty ? palette.darkgray : palette.darkbrown)};
`;
