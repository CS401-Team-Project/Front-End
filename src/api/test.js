import client from "./client";

const testApi = {
    getTest: () => client.get("/test_get"),
    postTest: (n1, n2, op) =>
        client.post("/test_post", {
            n1: n1,
            n2: n2,
            op: op
        })
};

export default testApi;
