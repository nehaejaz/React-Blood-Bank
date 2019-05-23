const initState = {
  donors: [
    { id: 1, name: "neha", bloodgrp: "A+", location: "khi" },
    { id: 1, name: "bassam", bloodgrp: "B+", location: "lhr" },
    { id: 1, name: "Anusha", bloodgrp: "O+", location: "isl" }
  ]
};

const donorReducer = (state = initState, action) => {
  return state;
};

export default donorReducer;
