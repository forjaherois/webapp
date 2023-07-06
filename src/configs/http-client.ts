import axios from 'axios';

const baseURL = process.env.REACT_APP_API;

const httpClient = axios.create({
    baseURL,
});

export default httpClient;
