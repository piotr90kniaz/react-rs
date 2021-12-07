import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: '/mocks',
});

export default axiosInstance;
