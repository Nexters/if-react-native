import { apiFetch } from '../axios';
import { API_METHOD } from '../../constants/types';

export const getStories = async () => {
  const result = await apiFetch({
    url: '/stories',
    method: API_METHOD.GET,
  });

  return convertStoriesData(result);
};

const convertStoriesData = (data) => {
  return data.map(({ id, title, date, memo, country, ...item }) => ({
    id,
    title,
    date,
    memo,
    pictureUrl: item['picture_list'][0].url,
    albumStickerImageUrl: country['album_sticker_image_url'],
    flagImageUrl: country['flag_image_url'],
  }));
};
