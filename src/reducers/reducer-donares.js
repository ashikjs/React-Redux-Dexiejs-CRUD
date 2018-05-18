/*
 * All reducers get two parameters passed in, state and action that occurred
 *       > state isn't entire apps state, only the part of state that this reducer is responsible for
 * */

// "state = null" is set so that we don't throw an error when app first boots up
import {
    ADD_DONARE,
    UPDATE_DONARE,
    DELETE_DONARE,
    LOAD_DONARES
  } from '../constants';

    const initialState = {
        donars: [],
    };

export default function (state = initialState, { type, payload }) {
    switch (type) {
        case ADD_DONARE:
            return { donars: [...state.donars, payload] };
            break;
            
        case UPDATE_DONARE:
            return payload;
            break;
    }
    return state;
}