import {
    ADD_DONARE,
    UPDATE_DONARE,
    DELETE_DONARE,
    LOAD_DONARES
  } from '../constants';
  import db from '../db';
  

export const selectUser = (user) => {
    console.log("You clicked this player: ", user.first);
    return {
        type: 'USER_SELECTED',
        payload: user
    }
};
export function addDonare(donare) {
    return dispatch => {
        db.donars
        .add(donare)
        .then ((id)=>{
            dispatch({
                type: ADD_DONARE,
                payload: Object.assign({}, donare, { id })
            });
            console.log("id!! ", donare);
        })
        .catch (function (error) {
            console.log("Error: " + error);
        });
    }

  }
