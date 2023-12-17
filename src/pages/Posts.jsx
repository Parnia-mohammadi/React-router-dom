import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
function Posts() {
  const [isAut, setIsAut] =useState(false);
  return (
    <div>
      <h1>POSTS</h1>
      <p>Posts are here :</p>
      <ul>
        <li>
          <Link to="1">post1</Link>
        </li>
        <li>
          <Link to="2">post2</Link>
        </li>
        <li>
          <Link to="3">post3</Link>
        </li>
      </ul>
      {/* <Link to ='/app'>go back to Home</Link> */}
      {isAut && <Navigate to="/app" />}
      <button onClick={()=>setIsAut(!isAut)}>go to post by navigate component</button>
    </div>
  );
}

export default Posts;
