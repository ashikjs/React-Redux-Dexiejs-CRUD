export const selectUser = (user) => {
    console.log("You clicked this player: ", user.first);
    return {
        type: 'USER_SELECTED',
        payload: user
    }
};