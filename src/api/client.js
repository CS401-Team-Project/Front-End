import axios from "axios";

const apiClient = axios.create({
    // Later read this URL from an environment variable
    baseURL: process.env.REACT_APP_API_ENDPOINT || "http://sl.absolutzero.org/api"
});

export default apiClient;
