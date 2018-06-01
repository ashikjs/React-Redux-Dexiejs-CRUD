/*
 * All reducers get two parameters passed in, state and action that occurred
 *       > state isn't entire apps state, only the part of state that this reducer is responsible for
 * */

// "state = null" is set so that we don't throw an error when app first boots up
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
            return { donors: [...state, payload] }
            break;
        case UPDATE_DONOR:
            return { donors: [...state.donors.filter((donor) => donor.id !== payload.id),payload ]}
            break;
        case DELETE_DONOR:
            return { donors: state.donors.filter((todo) => todo.id !== payload) }
            break;
        case LOAD_DONORS:
            return payload;
            break;
    }
    return state;
}