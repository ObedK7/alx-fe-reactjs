import ProfilePage from "./ProfilePage";
import { UserProvider } from "./UserContext";

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };
  function App() {
    return (
      <UserProvider>
        <ProfilePage />
      </UserProvider>
    );
  }
}

export default App;
