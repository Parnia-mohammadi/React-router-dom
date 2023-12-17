import { NavLink } from "react-router-dom";

function AppNav({children}) {
  return (
    <nav>
      <ul>
        <li>
          <NavLink end to="/app">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="posts">Posts</NavLink>
        </li>
        <li>
          <NavLink to="dashboard">Dashboard</NavLink>
        </li>
        <li>
          <NavLink to="login">Login/LogOut</NavLink>
        </li>
      </ul>
      {children}
    </nav>
  );
}

export default AppNav;
