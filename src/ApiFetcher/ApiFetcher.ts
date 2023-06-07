import axios from 'axios';

const API_FETCHER = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': 226,
  },
});

export default API_FETCHER;