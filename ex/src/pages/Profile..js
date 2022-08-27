import { useParams, } from "react-router-dom";

const data = {
  velopert : {
    name : '김민준',
    description : '리액트를 좋아하는 개발자', 
  },
  thdud : {
    name : '정소영',
    description : '리액트를 배우는 중입니다'
  },
}

const Profile=()=>{
  const params = useParams();
  const profile = data[params.username]

  return(
    <>
      <h1>사용자프로필</h1>    
      {profile? (
        <div>
          <h2>{profile.name}</h2>
          <p>{profile.description}</p>
        </div>        
      ) : (
        <p>존재하지 않는 프로필입니다.</p>
      )}
    </>
  );
};
export default Profile;