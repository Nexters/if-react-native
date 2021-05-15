import React, { useEffect, useState } from 'react';
import styled from '@emotion/native';
import * as ImagePicker from 'expo-image-picker';
import { Svg } from '../../assets';
import { Platform } from 'react-native';

const ImageInput = ({ setImage }) => {
  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const {
          status,
        } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <PressablePlusIcon onPress={pickImage}>
      <Svg name="plus" />
    </PressablePlusIcon>
  );
};

export default ImageInput;

const PressablePlusIcon = styled.Pressable`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;
