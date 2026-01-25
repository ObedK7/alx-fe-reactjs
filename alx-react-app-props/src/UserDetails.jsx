import { useContext } from "react";
import UserContext from "./components/UserContext";

function UserDetails() {
  const { user } = useContext(UserContext);
  return (
    <div>
      <h4>User Details</h4>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
}

export default UserDetails;
