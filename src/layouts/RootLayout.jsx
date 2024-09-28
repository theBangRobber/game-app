import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

// Persistent layout component
function RootLayout() {
  return (
    <div>
      <h1>The Game App</h1>
      <NavBar />
      <div style={{ padding: 20 }}>
        <Outlet />
      </div>
    </div>
  );
}

export default RootLayout;
