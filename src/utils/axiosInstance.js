import { header } from "./exports";
import axios from "axios";

const axiosInstance = axios.create({
    baseURL : "https://api.themoviedb.org/3/movie/",
});

axiosInstance.interceptors.request.use(
    function(config){
        config.headers = header;
        if(header.Authorization){
            config.headers.authorization = header.Authorization;
        }
        return config;
    },
    function(error){
        return Promise.reject(error)
    }
);
export default axiosInstance;