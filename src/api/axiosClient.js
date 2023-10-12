import axios from "axios";  
import queryString from 'query-string';

import apiConfig from "./apiConfig";
import { parseArgs } from "util";
import { response } from "express";
const axiosClient = axios.create({
    baseURL : apiConfig.baseUrl,
    headers: {
        'Content-Type' : 'application/json'
    },
    paramsSerializer : params => queryString.stringify({...params})
})
axiosClient.interceptors.request.use(async (config) => config)
axiosClient.interceptors.request.use((response) => {
if (response && response.data) {
    return response.data;
}
return response
}, (error) => {
    throw error;
});
export default axiosClient