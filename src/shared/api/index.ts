import {baseUrl} from "@/shared/config/api/url.ts";
import axios, {AxiosInstance} from 'axios';

export const axiosInstance: AxiosInstance = axios.create({
    baseURL: baseUrl
});

axiosInstance.interceptors.request.use((config) => {
    const token = localStorage.getItem("token")
    const crmId = localStorage.getItem('crmId')

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    if (crmId) {
        config.headers['crm-id'] = crmId;
    }

    return config
})