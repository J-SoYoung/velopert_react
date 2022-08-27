import { Link, useLocation, useSearchParams } from "react-router-dom"

const About = ()=>{

  // const location = useLocation()
  const [searchParams, setSearchParams] = useSearchParams()
  const detail = searchParams.get('detail')
  const mode = searchParams.get('mode')

  const onToggleDetail = ()=> {
    setSearchParams({mode, detail : detail === 'true' ? false : true})
  }
  const onIncreaseMode = ()=> {
    const nextMode = mode === null? 1 : parseInt(mode) + 1
    setSearchParams( {mode: nextMode, detail})
  }
  return (
    <>
      <h1>소개</h1>
      <p>리액트 라우터를 사용해 보는 프로젝트</p>
      <Link to='/'>돌아가기</Link>
      {/* <p>쿼리스트링 : {location.search}</p> */}
      <p>쿼리스트링 쪼개기!</p>
      <p>detail: {detail} </p>
      <p>mode: {mode} </p>
      <button onClick={onToggleDetail}> Toggle BTN </button>
      <button onClick={onIncreaseMode}> mode + 1 </button>
      
    </>
  )
}

export default About 