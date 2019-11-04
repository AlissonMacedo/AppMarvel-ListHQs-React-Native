import axios from 'axios';

const api = axios.create({
  baseURL: 'http://gateway.marvel.com',
});

export default api;