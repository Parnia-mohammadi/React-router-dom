import { Outlet, useLocation } from "react-router-dom";
import AppNav from "./AppNav";
function Layout() {
  const location = useLocation();
  // console.log(location);
  // const {name, lastName}= location.state;
  const dataLogin = localStorage.getItem('loginData');
  // console.log((name+lastName));
  return (
    <div>
      <AppNav>
        <h1>
          Hello{" "}
          { dataLogin }
        </h1>
      </AppNav>
      <Outlet />
      <footer style={{ marginTop: "5rem" }}> This is footer </footer>
    </div>
  );
}

export default Layout;
