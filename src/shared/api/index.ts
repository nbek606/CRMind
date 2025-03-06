import {baseUrl} from "@/shared/config/api/url.ts";
import axios, {AxiosInstance} from 'axios';

export const axiosInstance: AxiosInstance = axios.create({
    baseURL: baseUrl,
    headers: {},
});