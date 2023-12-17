import { Link } from "react-router-dom";
function Posts() {
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
    </div>
  );
}

export default Posts;
