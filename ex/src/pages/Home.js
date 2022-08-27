import { Link } from "react-router-dom";

const Home = ()=>{
  return (
    <>
      <h1> HOME </h1>
      <p>가장 먼저 만든 페이지</p>
      <ul>
        <li><Link to='/about'>소개</Link></li>
        <li><Link to='/profile/velopert'>velopert의 프로필</Link></li>
        <li><Link to='/profile/thdud'>thdud의 프로필</Link></li>
        <li><Link to='/profile/hello'>존재하지 않는 프로필</Link></li>
        <li><Link to='/article'>게시글목록</Link></li>
      </ul>
      
    </>
  )
}

export default Home;