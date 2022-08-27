import { Link, Outlet } from "react-router-dom"


const Article = ()=> {
  return (
    <>
      <Outlet/>
      <ul>
        <li><Link to='/article/1'>게시글1</Link></li>
        <li><Link to='/article/2'>게시글2</Link></li>
        <li><Link to='/article/3'>게시글3</Link></li>
      </ul>
      <p><Link to='/'>홈으로</Link></p>
    </>
  );
};
export default Article;