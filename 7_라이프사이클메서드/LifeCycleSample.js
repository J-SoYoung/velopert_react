import { Component } from "react";

class LifeCycleSample extends Component {
  state = {
    number: 0,
    color : null,
  }

  myRef = null ;

  constructor(props){
    // 생성자함수, 컴포넌트 생성시 제일 먼저 호출됨
    super(props)
    console.log('constructor')
  };

  static getDerivedStateFromProps(nextProps, prevState){
    // props로 받아온 값을 state에 동기화
    console.log('getDerivedStateFromProps');
    if(nextProps.color !== prevState.color){
      return { color : nextProps.color}
    }
    return null;
  }


  componentDidMount(){
    // DOM생성 후, 첫 렌더링 마치면 실행
    console.log('componentDidMount')
  }

  shouldComponentUpdate(nextProps, nextState){
    // 리랜더링 실행여부
    console.log('shouldComponentUpdate', nextProps, nextState )
    return nextState.number % 10 !== 4
  }

  componentWillUnmount(){
    // 컴포넌트가 DOM에서 제거되기 전에 실행
    console.log('componentWillMount')
  }

  handleClick= ()=>{
    this.setState({
      number : this.state.number + 1
    })
  }
  getSnapshotBeforeUpdate(prevProps, prevState){
    // 업데이트 직전의 값을 확인해볼 수 있다. 
    console.log('getSnapshotBeforeUpdate')
    if (prevProps.color !== this.props.color){
      return this.myRef.style.color
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot){
    // 리랜더링 완료 후 실행
    console.log('componentDidUpdate', prevProps, prevState)
      if (snapshot){
        console.log('업데이트 직전 색상 :', snapshot)
      }
    }
  

  render() {
    // 필수메서드, 화면에 보여주는 역할
    console.log('render')
    const style = {
      color : this.props.color
    };

    return(
      <div>
        <h1 style={style} ref={ref => this.myRef=ref}>
          {this.state.number}
        </h1>
        <p>color : {this.state.color}</p>
        <button onClick={this.handleClick}>더하기</button>
      </div>
    )
  }
}
export default LifeCycleSample;