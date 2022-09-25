import React, { useState } from "react";
import UserTable from "./tables/UserTable";
import AddUserForm from "./forms/AddUserForm";
import EditUserForm from "./forms/EditUserForm";
const usersData = [
  { id: 1, name: "mody", username: "mody10000" },
  { id: 2, name: "mosh", username: "moshhamdani" },
  { id: 3, name: "whatever", username: "whatever1000" },
];
const initialFormState = { id: null, name: "", username: "" };
const App = () => {
  const [users, setUsers] = useState(usersData);
  const [editing, setEditing] = useState(false);
  const [currentUser, setCurrentUser] = useState(initialFormState);

  const addUser = (user) => {
    user.id = users.length + 1;
    const clonedUsers = [...users];
    clonedUsers.push(user);
    setUsers(clonedUsers);
  };

  const deleteUser = (id) => {
    setEditing(false);
    setUsers(users.filter((user) => user.id !== id));
  };

  const editRow = (user) => {
    setEditing(true);

    setCurrentUser({ id: user.id, name: user.name, username: user.username });
  };

  const updateUser = (id, updatedUser) => {
    setEditing(false);
    setUsers(users.map((user) => (user.id === id ? updatedUser : user)));
  };
  const cancelEditing = () => {
    setEditing(false);
  };
  console.log("render");
  return (
    <div className="container">
      <h1>CRUD App Using Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          {editing ? (
            <div>
              <h2> Edite user</h2>
              <EditUserForm
                cancelEditing={cancelEditing}
                currentUser={currentUser}
                updateUser={updateUser}
              ></EditUserForm>
            </div>
          ) : (
            <div>
              <h2>Add user</h2>
              <AddUserForm addUser={addUser} />
            </div>
          )}
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
        </div>
      </div>
    </div>
  );
};

export default App;
