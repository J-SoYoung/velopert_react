# Jsx란<br>
- 자바스크립트의 확장 문법
- 브라우저에서 실행되기 전에 코드가 번들링되는 과정에서 바벨을 사용하여 일반 자바스크립트 형태의 코드로 변환된다
```
번들링? bundling
"어떤 것들을 묶는다" 라는 뜻으로, 기능별로 모듈화하나 js 파일들을 묶어주는 것
⇒ 여러 개로 흩어져 있는 파일들을 압축, 난독화 등을 하여 하나의 파일로 모아주는 역할(=번들러)

웹펙의 로더는 직접 설치하고 설정해야 하지만 
create react-app 으로 프로젝트를 만들었기 때문에 별도의 웹팩을 설정할 필요가 없다
src/index.js를 시작으로 필요한 파일을 다 불러와서 번들링하게 된다
```

# Jsx문법<br>
### 1. 감싸인 요소<br>
컴포넌트에 여러 요소가 있다면 반드시 부모 요소 하나로 감싸줘야 한다<br>
> **Wyh?**<br>
> Virtual DOM에서 컴포넌트 변화를 감지해 낼 때, 효율적으로 비교할 수 있도록<br>
> 컴포넌트 내부는 하나의 DOM트리 구조로 이루어져야 하기 때문이다<br>
```
function App() {
  return (
    <>
      <h2>리액트는 짱이다</h2>
      <h2>나는 정소영이다</h2>
    </>
  );
}
```
<br>

### 2. 자바스크립트 표현<br>
> 자바스크립트 표현식을 작성하려면 JSX내부에서 코드를 {}로 감싸면 된다
```
function App() {
  const name = "정소영"
  return (
    <>
      <h2>리액트를 공부하자</h2>
      <h2>{name}은 예쁘다</h2>
    </>
  );
}
```
<br>

### 3. IF문 대신 조건부 연산자<br>
> JSX내부의 자바스크립트 표현식에서는 if문을 사용할 수 없다. <br>
> 하지만 조건에 따라 다른 애용을 렌더링 해야 할 때는 JSX 밖에서 if문을 사용해 사전에 값을 설정하거나<br>
> **{ }안에 조건부 연산자(삼항연산자)를 사용하면 된다<br>**
```
function App() {
  const name = "소영"
  return (
    <>
    {name === '소영'?(
      <h2>{name}아! 리액트 공부해야지</h2>
    ):(
      <h2>이름이 없습니다</h2>
    )}
    </>
  );
}
```

### 4. AND 연산자(&&)를 사용한 조건부 렌더링<br>
> 특정 조건을 만족할 때 내용을 보여주고, 만족하지 않을 때는 아무것도 렌더링 하지 않아야 할 때<br>
> &&연산자를 사용해 조건부 렌더링을 할 수 있다<br>
> **리액트에서는 false를 렌더링 할때 null과 마찬가지로 아무것도 나타나지 않기 때문이다**<br>
```
function App() {
  const name = "소영"
  return (
    <>
    {name === '소영' && <h2>{name}이는 리액트가 재미있다</h2>}
    </>
  );
}
```

### 5.undefinded를 렌더링하지 않기<br>
> **함수에서 undefinded만 반환하여 렌더링 하는 상황이 발생하면 안된다.**<br>
> OR(||)연산자를 사용하면 해당 값이 undefined이라도 오류를 방지할 수 있다<br>
```
function App() {
  const name = ""
  return (
    name || "값이 undefined입니다"
  );
}
```
<br>

> **JSX내부에서 undefined를 렌더링 하는 것은 괜찮다.**<br>
> name값이 undefined일때, 보여주고 싶은 문구가 있다면 ||연산자를 사용하는 방법도 있다<br>
```
function App() {
  const name = undefined
  return (
    <>
    <h2>{name ||"로그인을 하세요"}</h2>
    </>
  );
}
```

### 6.인라인 스타일링<br>
> DOM 요소에 스타일을 적용할 때는 문자열 형태로 넣는 것이 아니다.
> 1. 객체를 미리 선언하고, 카멜표기법으로 작성해야 한다
> 2. 선언하지 않는다면 태그 안에 {{}}를 사용해 작성해야 한다
```
1_ 객체선언
function App() {
  const name = "정소영"
  const style = { backgroundColor: "skyblue", fontWeight: 600, fontSize: 40 }
  return (
    <>
    <h2 style={style}>{name}</h2>
    </>
  );
}

2_태그 안 작성 (객체선언X)
function App() {
  const name = "정소영"
  return (
    <>
    <h2 style={{ backgroundColor: "skyblue", fontWeight: 600}}> {name} </h2>
    </>
  );
}
```

### 7.class대신 className<br>
> 일반 HTML에서 CSS클래스를 사용할 때는 class="styletype"과 같이 class속성을 설정하지만 <br>
> JSX에서는 class가 아닌 className으로 설정해 주어야 한다.<br>
```
 <h2 className='react'>{name}</h2>
```

### 8.꼭 닫아야 하는 태그<br>
> **JSX에서는 태그를 닫지 않으면 Compile에러가 나기 때문에 아래와 같이 태그를 꼭 닫아주어야 한다**<br>
> self-closing태그 : <input/> 태그를 선언함과 동시에 닫을 수 있는 태그를 말한다 
```
<input></input>
<input/> --> self-closing태그
```

### 9.주석<br>
JSX내부에서 주석을 작성할 때는 {/* 주석달기 */} 이렇게.
```
function App() {
  return (
    <>
      {/* 주석달기 */}
    </>
  );
}```

