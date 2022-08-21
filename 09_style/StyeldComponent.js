import styled, {css} from 'styled-components'

const StyledComponent = ()=>{
  return (
    <>
      <Box color='black'>
        <Button>안녕하세요</Button>
        <Button inverted={true}>테두리만</Button>
      </Box>
    </>
  )
}

const Box = styled.div`
  background : ${props => props.color || 'blue'};
  padding : 20px;
  display: flex;
`
const Button = styled.button`
  background : white;
  color : black;
  border-radius : 4px;
  padding : 10px;
  display : flex;
  align-items : center;
  justify-content : center;
  box-sizing : border-box;
  font-size : 20px;
  font-weight : 600;

  // &문자를 사용하여 Sass처럼 자기 자신 선택 가능
  &:hover{
    background : red;
  }

  // inverted값이 true일때 아래 스타일을 부여해 준다
  ${props => props.inverted && css`
    background : none;
    border : 5px solid red;
    color : red;
    
    &:hover {
      background: white;
      color : black;
    }
  `}
  }
`
export default StyledComponent;