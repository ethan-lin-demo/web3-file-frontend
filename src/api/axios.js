import AxiosBase from 'axios';
import baseURL from './config';

const axios = AxiosBase.create({
  baseURL,
});

axios.interceptors.request.use((req) => {
  const password = localStorage.getItem('password');
  if (password) {
    if (!req.params) {
      req.params = {};
    }
    req.params.password = password;
  }
  return req;
});

export default axios;
