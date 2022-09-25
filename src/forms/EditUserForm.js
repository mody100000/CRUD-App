import React, { useEffect, useState } from "react";
const EditUserForm = ({ currentUser, updateUser, cancelEditing }) => {
  const [user, setUser] = useState(currentUser);

  useEffect(() => {
    setUser(currentUser);
  }, [currentUser]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        updateUser(user.id, user);
      }}
    >
      <label>Name</label>
      <input
        type="text"
        name="name"
        value={user.name}
        onChange={handleInputChange}
      ></input>
      <label>Username</label>
      <input
        type="text"
        name="username"
        value={user.username}
        onChange={handleInputChange}
      ></input>
      <button>Update user</button>
      <button
        onClick={() => {
          cancelEditing();
        }}
        className="button muted-button"
      >
        cancel
      </button>
    </form>
  );
};

export default EditUserForm;
