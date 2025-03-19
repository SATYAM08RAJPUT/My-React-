import { useEffect, useState } from "react";
import "./infinite.css";

const InfiniteScroll = () => {
  const [post, setPost] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`https://jsonplaceholder.typicode.com/posts?_limit=5&_page=${page}`)
      .then((res) => res.json())
      .then((data) => {
        setPost((prev) => [...prev, ...data]);
        setLoading(false);
      });
  }, [page]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 100
      ) {
        setPage((prev) => prev + 1);
      }
    };
    console.log("inner Height:-", window.innerHeight);
    console.log("window scrollY:-", window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [page]);
  return (
    <>
      <div className="infinite-scrollbar">
        {post.map((posts) => {
          return (
            <>
              <li>{posts.title}</li>
              {loading && <p>loading more Posts</p>}
            </>
          );
        })}
      </div>
    </>
  );
};
export default InfiniteScroll;
