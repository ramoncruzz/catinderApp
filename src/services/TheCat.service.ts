import axios from 'axios';
import Config from 'react-native-config';

const baseURL = Config.BASE_URL;
const theCatApi = Config.THE_CAT_API;
const TheCat = axios.create({
  baseURL,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
    'x-api-key': theCatApi,
  },
});

export default TheCat;
