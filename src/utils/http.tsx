import axios, {type AxiosRequestConfig} from "axios";

const http = axios.create({baseURL: "https://tiktok.fullstack.edu.vn/api/"});

export type ApiEnvelope<T> = { data: T };
export async function httpGet<T>(
    path: string,
    options?: AxiosRequestConfig
): Promise<T> {
    const res = await http.get<T>(path, options);
    return res.data;
}
export default http;