/*
DOCS: https://github.com/CS401-Team-Project/Back-End/blob/main/API-DOCS/TRANSACTION.md
*/
import client from "./client";
// TODO: Add transaction API calls here ( similar to post request in test.js )

/* Doc: https://github.com/CS401-Team-Project/Back-End/blob/main/API-DOCS/TRANSACTION.md#transactioninfo-1 */
const getTransaction = (token, id) =>
    client.post("/transaction/info", {
        token: token,
        id: id
    });

/* Doc: https://github.com/CS401-Team-Project/Back-End/blob/main/API-DOCS/TRANSACTION.md#transactioncreate-1 */
const createTransaction = (token, id, title, description, vendor, date) =>
    client.post("/transaction/create", {
        token: token,
        id: id,
        description: description,
        vendor: vendor,
        date: date
    });

/* Doc: https://github.com/CS401-Team-Project/Back-End/blob/main/API-DOCS/TRANSACTION.md#transactionupdate-1 */
const updateTransaction = (token, id, data) =>
    client.post("/transaction/update", {
        token: token,
        id: id,
        data: data
    });

/* Doc: https://github.com/CS401-Team-Project/Back-End/blob/main/API-DOCS/TRANSACTION.md#transactiondelete-1 */
const deleteTransaction = (token, id) =>
    client.post("/transaction/delete", {
        token: token,
        id: id
    });

/* Doc: https://github.com/CS401-Team-Project/Back-End/blob/main/API-DOCS/TRANSACTION.md#transactionadd-item-1 */
const addItem = (token, id, name, quantity, unit_price, owed_by, description) =>
    client.post("/transaction/add-item", {
        token: token,
        id: id,
        name: name,
        quantity: quantity,
        unit_price: unit_price,
        owed_by: owed_by,
        description: description
    });

/* Doc: https://github.com/CS401-Team-Project/Back-End/blob/main/API-DOCS/TRANSACTION.md#transactionremove-item-1 */
const removeItem = (token, id, data) =>
    client.post("/transaction/remove-item", {
        token: token,
        id: id,
        data: data
    });

/* Doc: https://github.com/CS401-Team-Project/Back-End/blob/main/API-DOCS/TRANSACTION.md#transactionremove-item-1 */
const getItem = (token, id) =>
    client.post("/item/info", {
        token: token,
        id: id
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
