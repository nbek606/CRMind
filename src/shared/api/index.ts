import {baseUrl} from "@/shared/config/api/url.ts";
import axios, {AxiosInstance} from 'axios';

export const axiosInstance: AxiosInstance = axios.create({
    baseURL: baseUrl
});

axiosInstance.interceptors.request.use((config) => {
    const token = localStorage.getItem("token")
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config
})