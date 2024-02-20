import { NavLink, Outlet, useLocation, useOutlet } from "react-router-dom";
import Profile from "./Profile";
import Payment from "./Payment";
function Dashboard() {
  // const location = useLocation();
  // console.log(useOutlet())
  // if(!Outlet)return
  // const { name, lastName } = location.state;

  return (
    <div id="dashboard">
      {/* <h1>Hello {name + " + " + lastName}</h1> */}
      <hr />
      <div id="sidebar">
        <NavLink to="profile" element={<Profile />}>
          Profile
        </NavLink>
        <NavLink to="payment" element={<Payment />}>
          Payment
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
}

export default Dashboard;
