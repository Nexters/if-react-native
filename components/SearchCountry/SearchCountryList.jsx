import React from 'react';
import styled from '@emotion/native';
import SearchCountryItem from './SearchCountryItem';
import { Pressable } from 'react-native';

const data = [{
  id: 1,
  imageUrl: 'https://reactnative.dev/img/tiny_logo.png',
  name: '대한민국'
}, {
  id: 2,
  imageUrl: 'https://reactnative.dev/img/tiny_logo.png',
  name: '대한민국'
}, {
  id: 3,
  imageUrl: 'https://reactnative.dev/img/tiny_logo.png',
  name: '대한민국'
}, {
  id: 4,
  imageUrl: 'https://reactnative.dev/img/tiny_logo.png',
  name: '대한민국'
}, {
  id: 5,
  imageUrl: 'https://reactnative.dev/img/tiny_logo.png',
  name: '대한민국'
}, {
  id: 6,
  imageUrl: 'https://reactnative.dev/img/tiny_logo.png',
  name: '대한민국'
}]

const SearchCountryList = () => {
  const renderSearchCountryItem = ({item}) => (
    <Pressable onPress={() => {console.log(item.id)}}>
      <SearchCountryItem
        uri={item.imageUrl}
        name={item.name}
      />
    </Pressable>
  )

  return (
    <CountryListWrapper
      data={data}
      renderItem={renderSearchCountryItem}
      keyExtractor={item => item.id}
    />
  );
};

export default SearchCountryList;

const CountryListWrapper = styled.FlatList`
  margin-top: 44px;
`;
