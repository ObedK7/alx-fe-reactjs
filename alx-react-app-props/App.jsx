import ProfilePage from "./src/components/ProfilePage";
import { UserProvider } from "./src/components/UserContext";

function App() {
  {
    return (
      <UserProvider>
        <ProfilePage />
      </UserProvider>
    );
  }
}

export default App;
