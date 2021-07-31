import axios from "axios";

let axiosInstance = axios.create({
    baseURL: 'https://api.themoviedb.org/3/discover/movie?api_key=5a1a052b877422d51ab6cead862c74bf'
});

const getMovie = () => axiosInstance('');

export {getMovie};