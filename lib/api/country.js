import { apiFetch } from '../axios';
import { API_METHOD } from '../../constants/types';

export const getCountryStories = async () => {
  const result = await apiFetch({
    url: '/countries/stories',
    method: API_METHOD.GET
  });

  return convertCountryStories(result);
}

const convertCountryStories = (data) => {
  return data.reduce((acc, item) => {
    const formattedData = {
      id: item['id'],
      name: item['name'],
      type: item['type'],
      mainFoods: item['main_food'],
      numberOfStories: item['number_of_stories'],
      flagImageUrl: item['flag_image_url'],
      stampImageUrl: item['stamp_image_url'],
      albumStickerImageUrl: item['album_sticker_image_url'],
    };

    if (item['number_of_stories'] > 0) {
      acc.recorded.push(formattedData);
    } else {
      acc.notRecorded.push(formattedData);
    }
    return acc;
  }, {recorded: [], notRecorded: []})
}