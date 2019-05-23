export const donorAction = donor => {
  return (dispatch, getState) => {
    //aysn call to DB
    dispatch({ type: "RegisteredDonor", donor: donor });
  };
};
