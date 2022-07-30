# Ref와 DOM<br>
> Ref는 render 메서드에서 생성된 DOM 노드나 React 엘리먼트에 접근하는 방법을 제공한다.<br>
<br>

### Ref를 꼭 사용해야 할 때
- 특정 input에 포커스를 줄 때
- 스크롤 박스 조작할 때
- Canvas 요소에 그림 그릴 때
이 때는 어쩔 수 없이 DOM에 직접적으로 접근해야 하는데, 이를 위해 ref를 사용해야 한다<br>
<br>

### ref사용
- 콜백함수를 통한 ref설정
> ref를 달고자 하는 요소에 ref라는 콜백 함수를 props로 전달해 주면 된다.
> 이 콜백함수는 ref값을 파라미터로 전달받고 함수 내부에서 파라미터로 받은 ref를 컴포넌트의 변수로 설정한다
<br>

- createRef를 통한 ref설정
> 컴포넌트 내부에서 객체와 연결된 변수(=멤버변수)로 React.createRef()를 담아 주저야 한다

### createRef, useRef
- 클래스형 컴포넌트에서는 createRef를 사용
- 함수형 컴포넌트에서는 useRef를 사용 (8장)