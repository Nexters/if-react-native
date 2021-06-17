import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const axiosInstance = axios.create({
  baseURL: 'http://52.79.196.61:6150',
  timeout: 2500,
});

export const apiFetch = async ({ url, method, data }) => {
  const token = await AsyncStorage.getItem('token');
  if (token != null) {
    axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }
  // const convertedUrl = process.env.NODE_ENV === 'production' ? url : `/api${url}`;

  try {
    const result = await axiosInstance({
      url,
      method,
      data,
    });

    return result.data;
  } catch (e) {
    throw e;
  }
};
