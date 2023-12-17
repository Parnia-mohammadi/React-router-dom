import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [name, setName] = useState(
    localStorage.getItem("loginData") != null
      ? localStorage.getItem("loginData").split(" ").at(0)
      : ""
  );
  const [lastName, setLastName] = useState(
    localStorage.getItem("loginData") != null
      ? localStorage.getItem("loginData").split(" ").at(-1)
      : ""
  );
  const [isClicked, setIsClicked] = useState(JSON.parse(localStorage.getItem('isClicked')));
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = name + " _ " + lastName;
    localStorage.setItem("loginData", data);
    navigate("/app/login", { replace: true, state: { name, lastName } });
    setIsClicked(true);
    localStorage.setItem('isClicked','true');
  };
  const handleRemoveDataLogin = (e) => {
    e.preventDefault();
    localStorage.removeItem("loginData");
    setName("");
    setLastName("");
    navigate("/app/login", { replace: false, state: { name, lastName } });
    setIsClicked(false);
    localStorage.setItem('isClicked','false');
  };
  //   console.log(localStorage.getItem("loginData").split(" ").at(0));
  if (isClicked) {
    return (
      <div>
        <p>
          you are login {name}_ {lastName}
        </p>
        <p>you can log out by clicking below button :</p>
        <button
          style={{
            display: "block",
            backgroundColor: "pink",
            marginTop: "1rem",
          }}
          onClick={handleRemoveDataLogin}
        >
          LogOut
        </button>
      </div>
    );
  }
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">enter your name : </label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={(e) => setName(e.target.value)}
          required="required"
        />
        <label htmlFor="lastName">enter your last name : </label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          required="required"
          onChange={(e) => setLastName(e.target.value)}
        />
        <button style={{ display: "block", marginTop: "1rem" }}>Login</button>
        <button
          style={{
            display: "block",
            backgroundColor: "pink",
            marginTop: "1rem",
          }}
          onClick={handleRemoveDataLogin}
        >
          LogOut
        </button>
      </form>
    </div>
  );
}

export default Login;
