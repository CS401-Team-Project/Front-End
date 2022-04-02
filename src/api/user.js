// TODO: Add user API calls here ( similar to post request in test.js )
import client from "./client";

// const getTest = () => client.get("/test_get");
const user_info = () => client.post("/user/info");

export default {
    //getTest,
    user_info
};
