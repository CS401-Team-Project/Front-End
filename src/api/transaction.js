/*
DOCS: https://github.com/CS401-Team-Project/Back-End/blob/main/API-DOCS/TRANSACTION.md
*/
import client from "./client";
// TODO: Add transaction API calls here ( similar to post request in test.js )

/* Doc: https://github.com/CS401-Team-Project/Back-End/blob/main/API-DOCS/TRANSACTION.md#transactioninfo-1 */
const getTransaction = (token, transaction_id) =>
    client.post("/transaction/info", {
        token: token,
        id: transaction_id
    });

/* Doc: https://github.com/CS401-Team-Project/Back-End/blob/main/API-DOCS/TRANSACTION.md#transactioncreate-1 */
const createTransaction = (token, group_id, title, description, vendor, date) =>
    client.post("/transaction/create", {
        token: token,
        id: group_id,
        description: description,
        vendor: vendor,
        date: date
    });

/* Doc: https://github.com/CS401-Team-Project/Back-End/blob/main/API-DOCS/TRANSACTION.md#transactionupdate-1 */
const updateTransaction = (token, transaction_id, data) =>
    client.post("/transaction/update", {
        token: token,
        id: transaction_id,
        data: data
    });

/* Doc: https://github.com/CS401-Team-Project/Back-End/blob/main/API-DOCS/TRANSACTION.md#transactiondelete-1 */
const deleteTransaction = (token, transaction_id) =>
    client.post("/transaction/delete", {
        token: token,
        id: transaction_id
    });

/* Doc: https://github.com/CS401-Team-Project/Back-End/blob/main/API-DOCS/TRANSACTION.md#transactionadd-item-1 */
const addItem = (token, transaction_id, items_list) =>
    client.post("/transaction/add-item", {
        token: token,
        id: transaction_id,
        items: items_list
    });

/* Doc: https://github.com/CS401-Team-Project/Back-End/blob/main/API-DOCS/TRANSACTION.md#transactionremove-item-1 */
const removeItem = (token, transaction_id, transaction_data) =>
    client.post("/transaction/remove-item", {
        token: token,
        id: transaction_id,
        data: transaction_data
    });

/* Doc: https://github.com/CS401-Team-Project/Back-End/blob/main/API-DOCS/TRANSACTION.md#iteminfo-1 */
const getItem = (token, item_id) =>
    client.post("/item/info", {
        token: token,
        id: item_id
    });

export default {
    getTransaction,
    createTransaction,
    updateTransaction,
    deleteTransaction,
    addItem,
    removeItem,
    getItem
};
