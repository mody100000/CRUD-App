import React from "react";
import UserTabel from "./tabels/UserTabel";
const App = () => {
  return (
    <div className="container">
      <h1>CRUD App Using Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Add user</h2>
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTabel />
        </div>
      </div>
    </div>
  );
};

export default App;
