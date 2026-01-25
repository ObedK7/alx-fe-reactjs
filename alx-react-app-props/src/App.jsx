import ProfilePage from "./ProfilePage";
import { UserProvider } from "./components/UserContext";

function App() {
  ["UserContext.Provider", "value"];
  {
    return (
      <UserProvider>
        <ProfilePage />
      </UserProvider>
    );
  }
}

export default App;
