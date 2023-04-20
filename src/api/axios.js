import AxiosBase from 'axios';

const axios = AxiosBase.create({
  baseURL: 'http://localhost:8080/',
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
