import ProfilePage from "./ProfilePage";
import { UserProvider } from "./components/UserContext";

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
