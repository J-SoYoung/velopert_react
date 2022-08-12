# 컴포넌트 스타일링<br>
1. 일반CSS : 컴포넌트를 스타일링하는 기본적인 방법<br>
2. Sass :  CSS전처리기 중 하나로 확장된 CSS문법을 사용하는 방법<br>
3. CSS Module : CSS클래스가 다른 CSS클래스의 이름과 절대 충돌하지 않도록 파일마다 고유한 이름을 자동으로 생성해 주는 옵션<br>
4. styled-components :  자바스크립트파일에 스타일을 내장시키는 방식으로, 해당 스타일이 적용된 컴포넌트를 만들 수 있게 해준다<br>
<br>

## 9-1 일반CSS<br>
CSS를 작성할 때 가장 중요한 방법은 이름이 중복되지 않게 만드는 것입니다
- 프로젝트에 자동 생성된 App.css를 보면 이름이 **컴포넌트 이름-클래스** 형태로 지어져 있습니다<br>
  ( 예: App-header )
- BEM Naming = CSS 방법론 중 하나,
```
// form 태그 안에서 CSS를 작성하는 예시
<form class="form form--theme-xmas form--simple">
  <input class="form__input" type="text" />
  
  // css 
  .form { }
  .form--theme-xmas { }
  .form--simple { }
  .form__input { }
```
<br>

## 9-2 Sass<br>
- Syntactically Awesome Style Sheets ( .221p) 
- CSS전처리기로 복잡한 작업을 쉽게 할 수 있도록 도와주고 스타일 코드의 재활용성을 높여준다.
- 코드의 가독성을 높여 유지보수가 더욱 쉽다 
<br>

## 9-3 CSS Module<br>
CSS Module은 CSS를 불러와서 사용할 때 클래스 이름을 고유한 값, **[파일이름]_[클래스이름]_[해시값]** 형태로 자동으로 만들어서<br>
컴포넌트 스타일 클래스 이름이 중첩되는 현상을 방지해 주는 기술이다.<br>

### 파일이름.module.css<br>
- **확장자를 .module.css**로 저장하면 CSS Module이 적용된다
- 특정 클래스가 전역적으로 사용되는 경우라면 해당 클래스명 앞에 :global 을 입력하면 글로벌 CSS를 명시할 수 있다.
- CSS Module이 적용된 class명 : CSSModule_wrapper_rCqhL ( 개발자도구 element확인 가능, console.log(styles)확인 가능 )

```
// js파일
import styles from './CSSModule.module.css';

const CSSModule = ()=>{
  return (
    <div className={styles.wrapper}>
      안녕하세요! 저는 <span className="global_style">CSS Module</span> 입니다
    </div>
  )
}
export default CSSModule;


// css파일
.wrapper {
  background-color: skyblue;
  color: white;
  font-weight: 800;
}

// 글로벌CSS 작성시 => :global 클래스명
:global .global_style {
  color : gray;
}

// 두 개이상의 class명을 적용할 때는 백틱(``)을 사용한다
<div className={`${styles.wrapper} ${styles.free}` }>

// 배열 형태로 className을 저장해 내장함수를 이용한다
<div className={[styles.wrapper, styles.free].join(' ')}>

// ( .join() => 배열의 모든 요소를 연결해 하나의 문자열로 만듦, ()의 내용을 생략하면 ,로 구분되고 (' ')면 아무 문자도 없이 연결된다)
```
<br>

## 9-4 Styled-component<br>
자바스크립트 파일 안에 스타일을 선언하는 방식, .css 또는 .scss 스타일 파일을 따로 만들지 않아도 된다는 장점이 있다.<br>
```
yarn add styled-component
```
<br>

