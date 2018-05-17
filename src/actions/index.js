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
export const donareAdd = (donare) => {
    console.log("you make a request for add new donare: ", donare);
    return {
        type: 'DONARE_ADD',
        payload: donare
    }
};

export function addDonare(donare) {
    return dispatch => {
        db.donars
        .add(donare)
        .then (function(id){
            // dispatch({
            //     type: ADD_DONARE,
            //     payload: Object.assign({}, donare, { id }),
            // });
            console.log(id)
        })
        .catch (function (error) {
            console.log("Error: " + error);
        });
    }

  }
