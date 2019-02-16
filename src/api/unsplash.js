import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 4a139e6abe63d23195d444b2fc9caf888ae2efc254f38aece127b2cff689d56a'
  }
});
