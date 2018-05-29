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

export function donorAdd(donor) {
    return dispatch => {
        db.donors
        .add(donor)
        .then ((id)=>{
            dispatch({
                type: ADD_DONOR,
                payload: Object.assign({}, donor, { id })
            });
            console.log("action-- ", donor);
        })
        .catch (function (error) {
            console.log("Error: " + error);
        });
    }

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
