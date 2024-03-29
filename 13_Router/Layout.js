import { Outlet, useNavigate } from "react-router-dom";

const LayOut = ()=> {
  const navigate = useNavigate()

  const goBack = ()=> {
    //이전페이지로 이동
    navigate(-1)
  }

  const goArticle = ()=> {
    // article페이지로 이동
    navigate('/article', {replace: true})
  } 
  return (
    <>
      <div>
        <header style={{ background: 'lightgray', padding : 16, fontSize: 24 }}>
          Header
          <button onClick={goBack}>뒤로가기</button>
          <button onClick={goArticle}>게시글 목록</button>
        </header>
      </div>
      <main>
        <Outlet/>
      </main>
    </>
  );
};
export default LayOut;