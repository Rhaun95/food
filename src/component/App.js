import styled from "styled-components";
import {useState,useEffect} from "react";
import Pagination from "./Pagination";

function App() {

  const [posts, setPosts] = useState([]);
  const [limit, setLimit] = useState(5); //한페이지 게시물 갯수
  const [page, setPage] = useState(1); 
  const offset = (page - 1) * limit; //현 페이지 첫 게시물 index

  useEffect(() =>{
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => setPosts(data));
    // setPosts(...posts, posts)
  }, []);

  return (
    <div> 
      <Layout>
      <header>
        <h1>게시물 목록</h1>
      </header>

      <label>
        페이지 당 표시할 게시물 수:&nbsp;
        <select
          type="number"
          value={limit}
          onChange={({ target: { value } }) => setLimit(Number(value))}
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="12">12</option>
          <option value="20">20</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
      </label>


     <Pagination
        total={posts.length}
        limit={limit}
        page={page}
        setPage={setPage}
     />
      <main>
        {posts.slice(offset, offset + limit).map(({ id, title, body }) => (
          <article key={id}>
            <h3>
              {id}. {title}
            </h3>
            <p>{body}</p>
          </article>
        ))}
      </main>
    </Layout>
    </div>
  );
}

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 800px;
  margin: 0 auto;
`;

export default App;
