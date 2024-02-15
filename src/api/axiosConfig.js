import axios from 'axios';

// Create a new instance of Axios with custom configuration
const axiosInstance = axios.create({
  baseURL: 'http://localhost:8080',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': 'http://localhost:3000', // Add the origin you want to allow
  },
});

export default axiosInstance;

