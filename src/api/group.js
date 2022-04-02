// TODO: Add group API calls here ( similar to post request in test.js )

import client from "./client";

// const getTest = () => client.get("/test_get");
const getGroup = (id) =>
    client.post("/group/info", {
        id: id
    });

export default {
    getGroup
};

/*import client from "./client";

// const getTest = () => client.get("/test_get");
const user_info = (token, sub) =>
    client.post("/user/info", {
        token: token,
        sub: sub
    });

export default {
    //getTest,
    user_info
};*/
