import { createStore } from "redux";
import rootReducer from "./rootReducer";

// ==============================|| REDUX - MAIN STORE ||============================== //

const store = createStore(rootReducer);
const persister = "Free";

export { store, persister };
