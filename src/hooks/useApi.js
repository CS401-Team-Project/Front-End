import { useState } from "react";

/**
 fixed :
 - no need to JSON.stringify to then immediatly do a JSON.parse
 - don't use export defaults, because default imports are hard to search for
 - axios already support generic request in one parameter, no need to call specialized ones
 **/
export default (apiFunc) => {
    const name = apiFunc.name;
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const request = async (...args) => {
        setLoading(true);
        try {
            if (process.env.REACT_APP_API_ENDPOINT) {
                console.log("===================================>");
                console.log("API CALL:", name, args);
            }

            const result = await apiFunc(...args);
            setData(result.data);
            if (process.env.REACT_APP_API_ENDPOINT) {
                console.log("RESULT:", result);
            }
            if (error) {
                setError(null);
            }
        } catch (err) {
            setError(err.name + ": " + err.message || "Unexpected error!");
            if (process.env.REACT_APP_API_ENDPOINT) {
                console.log("ERROR:", err.message);
            }
            if (data) {
                setData(null);
            }
        } finally {
            setLoading(false);
            if (process.env.REACT_APP_API_ENDPOINT) {
                console.log("<===================================");
            }
        }
    };

    const requestSlow = async (...args) => {
        setLoading(true);
        // simulate a slow request
        await new Promise((resolve) => setTimeout(resolve, 1000));
        request(...args);
    };

    const reset = () => {
        setData(null);
        setError(null);
        setLoading(false);
    };

    return { data, error, loading, request, requestSlow, reset, name };
};
