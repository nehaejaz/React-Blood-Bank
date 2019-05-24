export const donorActions = donor => {
  return (dispatch, getState, { getFiresbase, getFirestore }) => {
    //aysn call to store donor information in RegisterDonor Collection
    const firestore = getFirestore();
    firestore
      .collection("RegisteredDonors")
      .add({
        ...donor
      })
      .then(() => {
        dispatch({ type: "RegisteredDonor", donor: donor });
      })
      .catch(err => {
        dispatch({ type: "Error_RegisterDonor", err });
      });
  };
};
