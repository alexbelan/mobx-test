import { combineReducers, configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./contacts";

const rootReducer = combineReducers({
    contacts: contactsReducer
})

export const store = configureStore({
    reducer: rootReducer,
})

export type RootState = ReturnType<typeof store.getState>