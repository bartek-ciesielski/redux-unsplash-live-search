import { createApi } from 'unsplash-js';
import { ACCESS_KEY } from '../../credentials/unsplashKEY';

export const unsplash = createApi({
  accessKey: ACCESS_KEY,
});

export const getPhotosConfig = {
  page: 1,
  perPage: 30,
};
