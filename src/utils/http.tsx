import axios from "axios";

const http = axios.create({baseURL: "https://tiktok.fullstack.edu.vn/api/"});


export const httpGet = async (path: string, options = {}) => {
    const res = await http.get(path, options);
    return res.data;
}
export default http;