import axios from 'axios';

export const key = 'efff582d207540fb03074534b53b5f076e5bc2f5';

const api = axios.create({
  baseURL: 'https://api-ssl.bitly.com/v4',
  headers: {
    'Authorization': `Bearer ${key}`,
    'Content-Type': 'application/json'
  },
})

export default api;
// efff582d207540fb03074534b53b5f076e5bc2f5