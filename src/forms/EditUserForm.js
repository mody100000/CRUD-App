import { useState } from "react";
const EditUserForm = (props) => {
  const [user, setUser] = useState(props.currentUser);
  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });
  };
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        props.updateUser(user.id, user);
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
          props.setEditing(false);
        }}
        className="button muted-button"
      >
        cancel
      </button>
    </form>
  );
};

export default EditUserForm;
