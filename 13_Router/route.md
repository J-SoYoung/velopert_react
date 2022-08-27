# 라우팅<br>
사용자가 요청한 URL에 따라 알맞은 페이지를 보여주는 것을 의미<br>
<br>

## 1) MPA와 SPA의 차이점<br>
### MPA = Multi Page application<br>
- 멀티페이지 애플리케이션 : 사용자가 다른 페이지로 이동할 때마다 새로운 HTML을 받아오고, 페이지를 로딩할 때마다 서버에서 리소스를 전달받아 화면에 보여준다. 새로운 페이지를 보여줄 때마다 서버 측에서 모든 준비를 하기 때문에 트래픽이 더 많이 발생한다<br>
### SPA = Single Page Application <br>
- 싱글페이지 애플리케이션 : 하나의 페이지로 이루어진 애플리케이션<br>
리액트 라이브러리를 사용해 뷰 렌더링은 사용자의 브라우저가 담당하게 한다. HTML을 처음 한번만 받아와서 웹애플리케이션을 실행한 후, 사용자의 요청에 따라 필요한 데이터만 서버에서 받아와 화면에 업데이트 하는 방식이 SPA이다. 기술적으로는 한 페이지만 존재하지만 사용자가 경험하기에는 여러 페이지가 존재하는 것처럼 느낄 수 있다.<br>
<br>

리액트 라우터는 사용자 브라우저 주소창의 경로에 따라 페이지를 보여준다.<br>
이때 **서버에 다른 페이지의 html을 요청하는 게 아니라**<br>
**브라우저의 History API를 사용해 브라우저 주소값만 변경하고**<br> 
**라우팅 설정에 따라 다른 페이지를 보여주게 되는 것이다.** <br>
<br>

## 2) Router 설치, 적용<br>
```
yarn add react-router-dom
```
### 프로젝트에 라우터 적용<br>
src/index.js파일에서 <BrowserRouter>컴포넌트를 적용해 router를 사용한다. <br>

```
import {BrowserRouter} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
```
<br>

## 3) Route 컴포넌트로 특정 경로에 원하는 컴포넌트 보여주기 <br>
Route컴포넌트를 통해 라우트 설정을 해야 하며,<br>
Route컴포넌트는 Routes컴포넌트 내부에서 사용되어야 한다.<br>
```
< Route path = '주소규칙' element = { 보여줄 컴포넌트 JSX } >

// App.js
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
  </Routes>
```
<br>


## 4) Link 컴포넌트를 사용하여 다른 페이지로 이동하는 링크 보여주기<br>
웹페이지에서 링크를 이동할 때 <a>태그를 사용한다. <br>
하지만 리액트 라우터를 사용할 때에는 <a>를 바로 사용하면 안된다.<br>
그 이유는 <a>태그를 클릭하여 페이지를 이동할 때, 브라우저에서 페이지를 새로 불러오기 때문이다.<br>
라우터에서 사용하는 <Link>컴포넌트는 페이지를 새로 불러오는 것을 막고<br> 
History API를 통해 브라우저 주소의 경로만 바꿔준다<br>
```
<Link to = '경로'> 링크 이름 </Link>
```

## 5) URL파라미터와 쿼리스트링<br>
페이지 주소를 정의할 때 유동적인 값을 사용해야 하는 경우가 있다<br>
이때는 URL파라미터와 쿼리스트링을 사용하면 된다. <br>
- **URL 파라미터 : /profile/velopert**<br>
  URL파라미터는 주소의 경로에 유동적인 값을 넣는 형태이다.<br> 
  URL파라미터가 여러개인 경우에는 /profiles/:username/:filed형태로 사용가능하다<br>
<br>

- **쿼리스트링   : /articles?page=1&keyword=react**<br>
  쿼리스트링은 주소 뒷부분에 ?문자열 이후에 key=value형태로 값을 넣고 &로 구분하는 형태이다.<br>
  > - useLocation Hook 사용
  > 쿼리스트링 값을 사용하려면 ?을 지운 뒤, &로 문자열을 분리하고, key와 value를 파싱해야 한다.<br>
  > useSearchParams Hook을 사용해 쿼리스트링을 쉽게 다룰 수 있다<br>
<br>

- **쿼리스트링 useSearchParams()**<br>
  > - useSearchParams는 배열 타입의 값을 반환<br>
  >   첫 번째 원소 : 쿼리 파라미터를 조회하거나 수정하는 매서드 객체 반환<br>
  >                (.get메서드 : 파라미터 조회 / .set메서드 : 파라미터 업데이트)<br>
  >   두 번째 원소 : 쿼리 파라미터를 객체 형태로 업데이트 하는 함수 반환<br>
  > - 쿼리파라미터를 조회할 때 값은 무조건 문자열 타입이다<br>
  >   true / false : 'true'와 같이 따옴표로 감싸서 비교 해야함 <br>
  >   숫자를 다룬다면 parseInt를 사용하여 숫자 타입으로 변환<br>
<br>

## 6) 중첩된 라우트
리액트 라우터에서 제공하는 <Outlet/> 컴포넌트 사용<br>
Route의 children으로 들어가는 JSX 엘리먼트를 보여주는 역할을 한다.<br>
<br>

## 7) 리액트 라우터 부가기능
### useNavigate<br>
useNavigate는 Link컴포넌트를 사용하지 않고 다른 페이지로 이동할 수 있다.
> 파라미터가 숫자 타입이면 앞으로 가거나 뒤로 간다<br>
> navigate(-1) 뒤로가기 / navigate(-2) 뒤로 2번가기<br>
> 다른 페이지로 이동할 때는 해당 페이지를 써 주면 된다<br>
> 페이지 이동 시, replace 옵션이 있는데, 이 옵션은 **페이지 이동 기록이 남지 않아** <br>
> 뒤로가기 버튼을 눌러도 이전 페이지로 이동하지 않고 정해진 페이지로만 이동한다. <br>
```
  const goBack = ()=> {
    //이전페이지로 이동
    navigate(-1)
  }

  const goArticle = ()=> {
    // article페이지로 이동
    navigate('/article', {replace:true})
  } 
```
