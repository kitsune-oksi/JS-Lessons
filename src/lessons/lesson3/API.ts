import axios from 'axios';

const key = '5c47bb50';
const configOMB = {
    baseURL: `http://www.omdbapi.com/`,
};

const axiosInstance = axios.create(configOMB);

const API = {
    searchFilmsByTitle: (title: string) => {
        return axiosInstance.get(`?t=${title}&apikey=${key}`)
    },
    searchFilmsByType: (title: string, type: string) => {
        return axiosInstance.get(`?t=${title}&type=${type}&apikey=${key}`)
    }
};


export default API;
