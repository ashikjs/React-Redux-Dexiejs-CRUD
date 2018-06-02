import {
    ADD_DONOR,
    UPDATE_DONOR,
    DELETE_DONOR,
    LOAD_DONORS
  } from '../constants';

    const initialState = {
        donors: [],
    };

export default function (state = initialState, { type, payload }) {
    switch (type) {
        case ADD_DONOR:
            return { donors: [...state.donors, payload] }
            break;
        case UPDATE_DONOR:
            return { donors: [...state.donors.map(post => post.id == payload.id ? payload : post )] }
            break;
        case DELETE_DONOR:
            return { donors: state.donors.filter((todo) => todo.id !== payload) }
            break;
        case LOAD_DONORS:
            return { donors: payload }
            break;
        default: 
            return state 
    }
    return state;
}