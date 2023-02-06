import axios from 'axios';

const api = axios.create({
  baseURL: 'https://adota-pet-production.up.railway.app',
  headers: {
    'Access-Control-Allow-Origin': '*',
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  timeout: 40000
});

export { api };
