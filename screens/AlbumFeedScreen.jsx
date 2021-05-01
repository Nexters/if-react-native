import React from 'react';
import SafeAreaViewLayout from '../components/SafeAreaViewLayout';
import AlbumFeedList from '../components/AlbumFeedList';

const AlbumFeedScreen = () => {
  return (
    <SafeAreaViewLayout includeFlex={true}>
      <AlbumFeedList />
    </SafeAreaViewLayout>
  );
};

export default AlbumFeedScreen;
