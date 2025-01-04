import { useState } from 'react'
import Header from './components/header';

function App() {
  const [likes, setLikes] = useState(0);
  const [value, setValue] = useState(0);

  function handleClick() {
      setLikes(likes + 1);
  }
  function handlePlus() {
      setValue(value + 1);
  }

  function handleMin() {
      setValue(value - 1);
  }

  function handleReset() {
      setValue(0); 
  }

  return (
      <>
          <Header props="somebody" />
          <Header />
          <button onClick={handleClick}>Like ({likes})</button>
          <div className="counter-container">
              <div className="counter-row">
                  <button onClick={handleMin}>-</button>
                  <span>{value}</span>
                  <button onClick={handlePlus}>+</button>
              </div>
              <button className="reset-button" onClick={handleReset} disabled={value===0}>Reset!</button>
          </div>
      </>
  );
}

export default App
