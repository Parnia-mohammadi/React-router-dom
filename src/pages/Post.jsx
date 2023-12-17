import { useParams , Link, useSearchParams } from "react-router-dom";

const posts = [
  { id: 1, title: "title one", body: "body one" },
  { id: 2, title: "title two", body: "body two" },
  { id: 3, title: "title three", body: "body three" },
];
function Post() {
  const [searchParams, setSearchParams]= useSearchParams();
  const { id } = useParams();
  const post = posts.find((p) => p.id == Number(id));
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <Link to="/app/posts">go back to Posts</Link>
      <hr/>
      <button onClick={()=>{setSearchParams({name:'parnia', type:'earliest'});
      // searchParams.forEach( (e)=>console.log(e));
    }}>update url</button>
    </div>
  );
}

export default Post;
