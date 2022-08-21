import PropTypes from 'prop-types';


const MyComponent = ({name, children, favoriteNum}) => {
  // const {name, children} = props
  return ( 
    <>
      <div>내가 좋아하는 숫자 {favoriteNum} 입니다</div>
      <h3>안녕하세요 제 이름은 {name}입니다</h3>
      <h3>"{children}"가 props의 children값입니다</h3>
    </>
  )
}
MyComponent.defaultProps = {
  name : '미지정 '
}
MyComponent.propTypes = {
  name : PropTypes.string,
  favoriteNum : PropTypes.number.isRequired
}

export default MyComponent;

