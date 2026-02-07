import axios from "axios";

const BASE_URL = import.meta.env.VITE_APP_GITHUB_BASE_URL;
const API_KEY = import.meta.env.VITE_APP_GITHUB_API_KEY;

// Fetch multiple users by search term
export async function fetchUsers(searchTerm) {
  try {
    const response = await axios.get(
      `${BASE_URL}/search/users?q=${searchTerm}`,
      {
        headers: {
          Authorization: `token ${API_KEY}`, // Optional
        },
      },
    );
    return response.data.items; // Array of users
  } catch (error) {
    throw new Error("Users not found");
  }
}
