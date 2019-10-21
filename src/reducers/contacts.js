import {
    ADD_CONTACT,
    GET_CONTACT,
    GET_CONTACTS,
    REMOVE_CONTACT,
    REMOVE_CONTACTS
} from '../actions/types';

const defaultState = {
    contacts: null,
};

const contacts = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_CONTACT:
            return
        case GET_CONTACT:
            return
        case GET_CONTACTS:
            return
        case REMOVE_CONTACT:
            return
        case REMOVE_CONTACTS:
            return
        default:
            return state;
    }
};

export default contacts;
