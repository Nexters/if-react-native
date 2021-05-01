import React from 'react';
import Story from '../Story';
import { useNavigation } from '@react-navigation/native';
import { Svg } from '../../assets';
import styled from '@emotion/native';
import { ScrollView } from 'react-native';

const AlbumFeedList = () => {
  const navigation = useNavigation();
  const onPressPlusIcon = () => navigation.navigate('AddStory');

  return (
    <>
      <ScrollView>
        <Story
          title={'스타벅스'}
          isEmpty={false}
          position={'left'}
        />
        <Story
          title={'맥도날드'}
          isEmpty={false}
          position={'right'}
        />
        <Story
          title={'파파존스'}
          isEmpty={false}
          position={'left'}
        />
      </ScrollView>
      <PlusIcon onPress={onPressPlusIcon}>
        <Svg name="add" />
      </PlusIcon>
    </>
  );
};

export default AlbumFeedList;

const PlusIcon = styled.Pressable`
  position: absolute;
  bottom: 0;
  right: -24px;
`;
