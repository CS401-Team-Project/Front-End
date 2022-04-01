import { useState, useEffect } from "react";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:5000";

/**
 fixed :
 - no need to JSON.stringify to then immediatly do a JSON.parse
 - don't use export defaults, because default imports are hard to search for
 - axios already support generic request in one parameter, no need to call specialized ones
 **/
export const useApiClient = (axiosParams) => {
    const [response, setResponse] = useState(undefined);
    const [error, setError] = useState(undefined);
    const [loading, setLoading] = useState(true);

    const fetchData = async (params) => {
        try {
            const result = await axios.request(params);
            setResponse(result.data);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData(axiosParams);
    }, []); // execute once only

    return { response, error, loading };
};
