import axios from "axios";

const client = axios.create({
    // Later read this URL from an environment variable
    baseURL: process.env.REACT_APP_API_ENDPOINT || "http://sl.absolutzero.org/api"
    // headers: { "Content-Type": "application/json" }
});

export default client;
