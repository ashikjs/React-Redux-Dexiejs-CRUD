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
    console.log('bad 2')
    return dispatch => {
        db.donars
        .add(donare)
        .then (function(e){
            //
            // Then when data is stored, read from it
            //
            console.log('Data',e)
        })
    }

    //   db.table('todos')
    //     .add(donare)
    //     .then((id) => {
    //         console.log(id, Object.assign({}, donare, { id }))
    //     //    dispatch({
    //     //      type: ADD_DONARE,
    //     //      payload: Object.assign({}, donare, { id }),
    //     //    });
    //     });
    // }
  }
