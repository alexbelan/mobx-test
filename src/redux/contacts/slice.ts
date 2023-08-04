import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ContactDto } from "src/types/dto/ContactDto";
import { FavoriteContactsDto } from "src/types/dto/FavoriteContactsDto";
import { GroupContactsDto } from "src/types/dto/GroupContactsDto";

export interface InitialState {
    contacts: ContactDto[],
    favoriteContacts: FavoriteContactsDto,
    groupContacts: GroupContactsDto[]
}

const initialState: InitialState = {
    contacts: [],
    favoriteContacts: [],
    groupContacts: []
}

export const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        setContacts: (state: InitialState, action: PayloadAction<ContactDto[]>) => {
            state.contacts = action.payload
        },
        setFavoriteContacts: (state: InitialState, action: PayloadAction<FavoriteContactsDto>) => {
            state.favoriteContacts = action.payload
        },
        setGroupContacts: (state: InitialState, action: PayloadAction<GroupContactsDto[]>) => {
            state.groupContacts = action.payload
        },
    }
})