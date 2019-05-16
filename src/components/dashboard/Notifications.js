import React from "react";
import { Dropdown, Button } from "react-materialize";
const Notifications = () => {
  return (
    <div className="Notifications">
      <Dropdown trigger={<Button>Notifications</Button>}>
        <a href="#">one</a>
        <a href="#">two</a>
        <a href="#">three</a>
      </Dropdown>
    </div>
  );
};
export default Notifications;
