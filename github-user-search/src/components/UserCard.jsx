// src/components/UserCard.jsx
import { useState } from "react";
import { fetchUser } from "../services/githubService";

export default function UserCard() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);

  const handleSearch = async () => {
    try {
      const data = await fetchUser(username);
      setUser(data);
    } catch (error) {
      console.error(error);
      setUser(null);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      {user && (
        <div>
          <h2>{user.login}</h2>
          <img src={user.avatar_url} alt={user.login} width={100} />
          <p>{user.bio}</p>
        </div>
      )}
    </div>
  );
}
