# immer
불변성에 신경 쓰지 않는 것처럼 코드를 작성하되, 불변성 관리는 제대로 해주는 것<br>
<be>

**사용하는 이유**<br>
- immer가 없으면 개체 복사본을 수동으로 만들어야 한다. ( 일반적으로 스프레드 연산을 많이 사용함 )
- immer를 사용하면 원본 개체에 영향을 주지 않으면서 변경 내용을 기록하고 필요한 복사본을 만드는 작업을 처리할 수 있다
<br>

### immer사용법
- produce 함수를 사용하여 불변성 유지를 대신해주면서 새로운 상태를 생성해준다
- produce(state, draft) 형태로 사용한다
- 첫번째 파라미터에는 수정하고 싶은 상태,
- 두번째 파라미터에는 어떻게 업데이트하고 싶을지 정의하는 함수를 넣어준다.

