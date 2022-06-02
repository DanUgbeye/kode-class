import { Outlet } from "react-router-dom";
import UserContextProvider from "./contexts/userContext";

function App() {
  return (
    <UserContextProvider>
      <div className=" font-[Roboto] ">
        <Outlet />
      </div>
    </UserContextProvider>
  );
}

export default App;
