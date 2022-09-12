import styled from "styled-components";
import React from "react";

function Pagination({ total, limit, page, setPage, offset}) {
    //총 페이지 수
  const numPages = Math.ceil(total / limit);


  return (
    <>
      <Nav>
        <Button onClick={() => setPage(page-5<0?1:(page%5===0 ? (parseInt(page/5)-1)*5:page-1))} disabled={page >= offset}>
          &lt;  &lt;
        </Button>
        <Button onClick={() => setPage(page - 1)} disabled={page === 1}>
          &lt;
        </Button>
        
        
        {Array(numPages)
          .fill()
          .map((_, i) => (

            <Button
              key={i + 1} //현재 index +1:: 0부터 시작이니까
              onClick={() => setPage(i + 1)}    //:: 0부터 시작이니까
              aria-current={page === i + 1 ? "page" : null}
            >
              {i + 1}
            </Button>
          ))}

        <Button onClick={() => setPage(page + 1)} disabled={page === numPages}>
          &gt;
        </Button>
        {/* 페이징 갯수가 j==5   2 * temp+1*/}
        <Button onClick={() => setPage(page-5 < 0 ? 6 :(page%5 === 0 ? page+1 : 5*(parseInt(page/5)+1)+1)) } disabled={page === numPages}>
        {/* <Button onClick={() => setPage(page-5<0?2*temp+1:(Math.ceil(temp))+1)} disabled={page === numPages}> */}
          &gt; &gt;
        </Button>
      </Nav>
    </>
  );
}

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  margin: 16px;
`;

const Button = styled.button`
  border: none;
  border-radius: 8px;
  padding: 8px;
  margin: 0;
  background: black;
  color: white;
  font-size: 1rem;

  &:hover {
    background: tomato;
    cursor: pointer;
    transform: translateY(-2px);
  }

  &[disabled] {
    background: grey;
    cursor: revert;
    transform: revert;
  }

  &[aria-current] {
    background: deeppink;
    font-weight: bold;
    cursor: revert;
    transform: revert;
  }
`;

export default Pagination;