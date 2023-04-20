import axios from './axios';

const cloud = {
  login: (password) => axios.get(`login?password=${password}`),
  clouds: () => axios.get('clouds'),
  execute: (params) => axios.get('execute', { params }),
};

export default cloud;
