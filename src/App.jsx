// src/App.jsx
import AppRoutes from "./routes/AppRoutes";
import "./App.css"
import { UserProvider } from "./provider/userProvider";
function App() {
  return (
    <div>
      <UserProvider>
      <AppRoutes />
      </UserProvider>
    </div>
  );
}

export default App;
