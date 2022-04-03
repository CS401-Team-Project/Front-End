import client from "./client";
/*
DOCS: https://github.com/CS401-Team-Project/Back-End/blob/main/API-DOCS/USER.md
*/

/* Doc: https://github.com/CS401-Team-Project/Back-End/blob/main/API-DOCS/USER.md#register-1 */
const register = (token) =>
    client.post("/register", {
        token: token
    });

/* Doc: https://github.com/CS401-Team-Project/Back-End/blob/main/API-DOCS/USER.md#userinfo-1
 * Note: if sub is null, returns current user's full profile
 * otherwise return's another user's profile (where sub is the user's id)
 */
const getUser = (token, sub) =>
    client.post("/user/info", {
        token: token,
        sub: sub
    });

/* Doc: https://github.com/CS401-Team-Project/Back-End/blob/main/API-DOCS/USER.md#userupdate-1
 * data is a JSON object containing fields to update as key-value pairs */
const updateUser = (token, data) =>
    client.post("/user/update", {
        token: token,
        data: data
    });

/* Doc: https://github.com/CS401-Team-Project/Back-End/blob/main/API-DOCS/USER.md#userdelete-1 */
const deleteUser = (token) =>
    client.post("/user/delete", {
        token: token
    });

export default {
    register,
    getUser,
    updateUser,
    deleteUser
};
