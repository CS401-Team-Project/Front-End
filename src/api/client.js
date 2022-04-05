import axios from "axios";
import { store } from "store/index";

const client = axios.create({
    // Later read this URL from an environment variable
    baseURL: process.env.REACT_APP_API_ENDPOINT || "http://sl.absolutzero.org/api"
});

client.interceptors.request.use(function (config) {
    console.log("Request Interceptor -> Adding Authorization Bearer");
    const token = store.getState().auth.tokenId;
    config.headers.Authorization = token ? `Bearer ${token}` : "";
    return config;
});

export default client;
