import { useEffect, useState } from 'react';
import AlienComponent from './AlienComponent';
import './App.css';
import FormeComponent from './FormeComponent';

function App() {
  const [alienNum, setAlienNum] = useState(1);
  const [formeNum, setFormeNum] = useState(1);

  useEffect(() => {
    console.log("전체 컴포넌트 렌더링 끝났습니다!");
  },[]);

  const alienChange = () => {
    setAlienNum(alienNum + 1);
  }

  const formeChange = () => {
    setFormeNum(formeNum + 1);
  }

  return (
    <>
      <AlienComponent number={alienNum} onChange={alienChange}/>
      <FormeComponent number={formeNum} onChange={formeChange}/>
    </>
  );
}

export default App;