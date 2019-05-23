const initState = {
  donors: [
    { id: 1, name: "neha", bloodgrp: "A+", location: "khi" },
    { id: 2, name: "bassam", bloodgrp: "B+", location: "lhr" },
    { id: 3, name: "Anusha", bloodgrp: "O+", location: "isl" }
  ]
};

const donorReducer = (state = initState, action) => {
  switch (action.type) {
    case "RegisteredDonor":
      console.log("Donor has been registered");
      break;
    default:
      console.log("default");
  }
  return state;
};

export default donorReducer;
