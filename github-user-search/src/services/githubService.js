const GITHUB_URL = "https://api.github.com";
const API_KEY = import.meta.env.VITE_APP_GITHUB_API_KEY;

export const getUserData = async (username) => {
  const response = await fetch(`${GITHUB_URL}/users/${username}`, {
    headers: {
      Authorization: API_KEY ? `token ${API_KEY}` : "",
    },
  });

  if (!response.ok) throw new Error("User not found");
  return response.json();
};
