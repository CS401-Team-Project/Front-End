import { useState } from "react";

/**
 fixed :
 - no need to JSON.stringify to then immediatly do a JSON.parse
 - don't use export defaults, because default imports are hard to search for
 - axios already support generic request in one parameter, no need to call specialized ones
 **/
export default (apiFunc, callback) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const request = async (...args) => {
        setLoading(true);
        try {
            console.log("===================================>");
            console.log("API CALL:", apiFunc.name, args);
            const result = await apiFunc(...args);
            setData(result.data);
            console.log("RESULT:", result);
            if (callback) {
                callback(result);
            }
        } catch (err) {
            setError(err.name + ": " + err.message || "Unexpected error!");
            console.log("ERROR:", err.message);
        } finally {
            setLoading(false);
            console.log("<===================================");
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

    return { data, error, loading, request, requestSlow, reset };
};
