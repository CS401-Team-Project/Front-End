import { useApiClient } from "../../../hooks/useApiClient";
import config from "../../../config";

const TestApiClient = () => {
    const { response, loading, error } = useApiClient({
        method: "GET",
        url: "/test"
    });

    return (
        <div className="App">
            <h1>API Client Tests</h1>
            <p>Base API URL: {config.links.api}</p>

            {(() => {
                switch (true) {
                    case loading === true: {
                        return <p>Loading</p>;
                    }
                    case error !== undefined: {
                        return <p>Error Message: {error.message}</p>;
                    }
                    case response === undefined: {
                        return <p>No response</p>;
                    }
                    default: {
                        return <p>Response: {response.status}</p>;
                    }
                }
            })()}
        </div>
    );
};

export default TestApiClient;
