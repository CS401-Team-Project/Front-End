import { useState } from "react";

/**
 fixed :
 - no need to JSON.stringify to then immediatly do a JSON.parse
 - don't use export defaults, because default imports are hard to search for
 - axios already support generic request in one parameter, no need to call specialized ones
 **/
export default (apiFunc) => {
    const [data, setData] = useState(undefined);
    const [error, setError] = useState(undefined);
    const [loading, setLoading] = useState(true);

    const request = async (...args) => {
        setLoading(true);
        try {
            const result = await apiFunc(...args);
            setData(result.data);
        } catch (error) {
            setError(error.message || "Unexpected error!");
        } finally {
            setLoading(false);
        }
    };

    return { data, error, loading, request };
};
