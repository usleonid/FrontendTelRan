import { legacy_createStore as createStore } from "@reduxjs/toolkit"
import { rootReducer } from "../reducers/rootReducer";

export const store = createStore(rootReducer);