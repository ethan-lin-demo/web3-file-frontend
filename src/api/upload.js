import axios from './axios';

const upload = {
  login: (password) => axios.get(`login?password=${password}`),
  clouds: () => axios.get('clouds'),
  execute: (params) => axios.get('execute', { params }),
};

export default upload;
