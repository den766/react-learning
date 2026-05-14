import { useState, useEffect } from "react";

function FetchUserPosts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const Posts1To10 = posts.slice(0,10);

  useEffect(() => {
    async function getPosts() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts",
        );
        if (!response.ok) throw new Error("Fetch request Failed");
        const data = await response.json();

        setPosts(data);
        console.log(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    }
    getPosts();
  }, []);

  if (loading) {
    return <h1>Loading Posts...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  if (posts.length === 0) {
    return <h1>No posts found</h1>;
  }

  return (
    <div>
      <ul>
        {Posts1To10.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default FetchUserPosts;
