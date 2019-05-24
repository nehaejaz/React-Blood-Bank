export const donorAction = donor => {
  return (dispatch, getState, { getFiresbase, getFirestore }) => {
    //aysn call to DB
    dispatch({ type: "RegisteredDonor", donor: donor });
  };
};
