/*
DOCS: https://github.com/CS401-Team-Project/Back-End/blob/main/API-DOCS/TRANSACTION.md
*/
import client from "./client";
// TODO: Add transaction API calls here ( similar to post request in test.js )

/* Doc: https://github.com/CS401-Team-Project/Back-End/blob/main/API-DOCS/TRANSACTION.md#transactioninfo-1 */
const getTransaction = (transaction_id) =>
    client.post("/transaction/info", {
        id: transaction_id
    });

/* Doc: https://github.com/CS401-Team-Project/Back-End/blob/main/API-DOCS/TRANSACTION.md#transactioncreate-1 */
const createTransaction = (group_id, title, description, vendor, date) =>
    client.post("/transaction/create", {
        id: group_id,
        description: description,
        vendor: vendor,
        date: date
    });

/* Doc: https://github.com/CS401-Team-Project/Back-End/blob/main/API-DOCS/TRANSACTION.md#transactionupdate-1 */
const updateTransaction = (transaction_id, data) =>
    client.post("/transaction/update", {
        id: transaction_id,
        data: data
    });

/* Doc: https://github.com/CS401-Team-Project/Back-End/blob/main/API-DOCS/TRANSACTION.md#transactiondelete-1 */
const deleteTransaction = (transaction_id) =>
    client.post("/transaction/delete", {
        id: transaction_id
    });

/* Doc: https://github.com/CS401-Team-Project/Back-End/blob/main/API-DOCS/TRANSACTION.md#transactionadd-item-1 */
const addItem = (transaction_id, items_list) =>
    client.post("/transaction/add-item", {
        id: transaction_id,
        items: items_list
    });

/* Doc: https://github.com/CS401-Team-Project/Back-End/blob/main/API-DOCS/TRANSACTION.md#transactionremove-item-1 */
const removeItem = (transaction_id, transaction_data) =>
    client.post("/transaction/remove-item", {
        id: transaction_id,
        data: transaction_data
    });

/* Doc: https://github.com/CS401-Team-Project/Back-End/blob/main/API-DOCS/TRANSACTION.md#iteminfo-1 */
const getItem = (item_id) =>
    client.post("/item/info", {
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
