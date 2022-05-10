import axios from 'axios';


const movieDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: 'aca088ed0cd6da276a7e1d954151b30c',
        language: 'es-ES',
    },
});


export default movieDB;
