import { useState } from "react";
import { fetchUsers } from "../services/githubService";
import "./index.css";

export default function Search() {
  const [username, setUsername] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setUsers([]);

    try {
      const data = await fetchUsers(username);
      if (data.length === 0) {
        setError("No users found");
      } else {
        setUsers(data);
      }
    } catch (err) {
      setError("Looks like we can't find any users");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search GitHub users"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {loading && <p className="loading">Loading...</p>}
      {error && <p className="error">{error}</p>}

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
        {users.map((user) => (
          <div
            key={user.id}
            className="user-card"
            style={{ margin: "10px", width: "200px" }}
          >
            <img src={user.avatar_url} alt={user.login} />
            <h3>{user.login}</h3>
            <a
              href={user.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="profile-link"
            >
              View Profile
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
