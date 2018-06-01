import {
    ADD_DONOR,
    UPDATE_DONOR,
    DELETE_DONOR,
    LOAD_DONORS
  } from '../constants';
  import db from '../db';
  

export const selectUser = (user) => {
    console.log("You clicked this player: ", user.first);
    return {
        type: 'USER_SELECTED',
        payload: user
    }
};

export function donorGet() {
    return (dispatch) => {
        db.donors
            .toArray()
            .then((donor) => {
                dispatch({
                    type: LOAD_DONORS,
                    payload: donor,
                });
        });
    };
}
export function donorAdd(donor) {
    return dispatch => {
        db.donors
        .add(donor)
        .then ((id)=>{
            dispatch({
                type: ADD_DONOR,
                // payload: Object.assign({}, donor, { id })
                payload: donor
            });
            // console.log("action-- ", id);
        })
        .catch (function (error) {
            console.log("Error: " + error);
        });
    }
}
  
export function donorUpdate(donor) {
        return (dispatch) => {
          db.donors
            .put(donor)
            .then(() => {
              dispatch({
                type: UPDATE_DONOR,
                payload: donor,
              });
            });
        };
}

export function donorDelete(id) {
    return (dispatch) => {
        db.donors
            .delete(id)
            .then(() => {
                dispatch({
                    type: DELETE_DONOR,
                    payload: id,
                });
        });
    };
}
