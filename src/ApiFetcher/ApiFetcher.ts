import axios from 'axios';

const baseURL = 'http://localhost:5000/api/v1/todo';

const API_FETCHER = axios.create({
  baseURL,
});

export default API_FETCHER;