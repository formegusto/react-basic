import React from 'react';
import MyComponent from './MyComponent';

class App extends React.Component {
  state = {
    number: 0,
  }

  render() {
    const { number } = this.state;
    const changeNumber = () => {
      this.setState({number: number + 1});
    }

    return (
      <div>
        <MyComponent number={number} changeNumber={changeNumber}/>
        {/* 변수를 내려줄 수도 있고! 함수를 내려줄 수도 있습니다! */}
      </div>
    )
  }
}

export default App;