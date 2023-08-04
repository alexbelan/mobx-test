import { contactsSlice } from "./slice"

const contactsReducer  = contactsSlice.reducer

export const {
    setContacts,
    setFavoriteContacts,
    setGroupContacts,
} = contactsSlice.actions

export default contactsReducer

