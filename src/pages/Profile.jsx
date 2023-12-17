import { Link } from "react-router-dom";
function Profile() {
  return (
    <div>
      <h1>Profile</h1>
      <Link to="/app/dashboard">go back to dashboard</Link>
    </div>
  )
}

export default Profile