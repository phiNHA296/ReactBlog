import axios from 'axios';

const API = axios.create({
  baseURL: 'http://wp-api.test/wp-json',
});

export default API;
