import axios from "axios";

let axiosInstance = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

const getMovie = () => axiosInstance('movie/popular?api_key=5a1a052b877422d51ab6cead862c74bf');
const getSearch = (value) => axiosInstance(`search/movie?&api_key=5a1a052b877422d51ab6cead862c74bf&query=+${value}`)


export {getMovie, getSearch};