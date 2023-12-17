import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import Dashboard from "./pages/Dashboard";
import Layout from "./components/Layout";
import Profile from "./pages/Profile";
import Payment from "./pages/Payment";
import LayoutDashboard from "./components/LayoutDashboard";
import Post from "./pages/Post";
import Login from "./pages/Login";
import { useState } from "react";

function App() {
  return (
    <Routes>
      <Route path="/app" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="posts" element={<Posts />} />
        {/* dynamic route */}
        <Route path="posts/:id" element={<Post />} />
        {/* navigate by use navigate */}
        <Route path="login" element={<Login />} />
        <Route path="dashboard" element={<Dashboard />}>
          {/* <Route path="dashboard" element={<Dashboard />} />
        <Route path="dashboard/*" element={<LayoutDashboard />}>
          <Route path="profile" element={<Profile />} />
          <Route path="payment" element={<Payment />} />
        </Route> */}
          <Route index element={<Navigate to="profile" replace={true}/>} />
          <Route path="profile" element={<Profile />} />
          <Route path="payment" element={<Payment />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
