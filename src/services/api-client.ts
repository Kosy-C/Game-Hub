import axios from "axios";

export const apiClient = axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '0cf4f73774784b7986d573a9cc5aaae7'
    }
})