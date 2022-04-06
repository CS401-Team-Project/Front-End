// TODO: Add group API calls here ( similar to post request in test.js )

import client from "./client";

/*
DOCS: https://github.com/CS401-Team-Project/Back-End/blob/main/API-DOCS/GROUP.md
*/

/* Doc: https://github.com/CS401-Team-Project/Back-End/blob/main/API-DOCS/GROUP.md#groupinfo-1 */
const getGroup = (group_id) =>
    client.post("/group/info", {
        id: group_id
    });

/* Doc: https://github.com/CS401-Team-Project/Back-End/blob/main/API-DOCS/GROUP.md#groupcreate-1 */
const createGroup = (group_id, description, member_list) =>
    client.post("/group/create", {
        id: group_id,
        description: description,
        members: member_list
    });

/* Doc: https://github.com/CS401-Team-Project/Back-End/blob/main/API-DOCS/GROUP.md#groupupdate-1
 * data is a JSON object containing fields to update as key-value pairs */
const updateGroup = (group_id, data) =>
    client.post("/group/update", {
        id: group_id,
        data: data
    });

/* Doc: https://github.com/CS401-Team-Project/Back-End/blob/main/API-DOCS/GROUP.md#groupdelete-1 */
const deleteGroup = (group_id) =>
    client.post("/group/delete", {
        id: group_id
    });

/* Doc:  https://github.com/CS401-Team-Project/Back-End/blob/main/API-DOCS/GROUP.md#groupjoin-1 */
const joinGroup = (group_id) =>
    client.post("/group/join", {
        id: group_id
    });

/* Doc: https://github.com/CS401-Team-Project/Back-End/blob/main/API-DOCS/GROUP.md#groupinvite-member-1 */
const inviteMember = (group_id, user_email) =>
    client.post("/group/invite-member", {
        id: group_id,
        email: user_email
    });

/* Doc: https://github.com/CS401-Team-Project/Back-End/blob/main/API-DOCS/GROUP.md#groupremove-member-1 */
const removeMember = (group_id, userid) =>
    client.post("/group/remove-member", {
        id: group_id,
        userid: userid
    });

/* Doc: https://github.com/CS401-Team-Project/Back-End/blob/main/API-DOCS/GROUP.md#grouprefresh-id-1 */
const refreshID = (group_id) =>
    client.post("/group/refresh-id", {
        id: group_id
    });

export default {
    getGroup,
    createGroup,
    updateGroup,
    deleteGroup,
    joinGroup,
    inviteMember,
    removeMember,
    refreshID
};
