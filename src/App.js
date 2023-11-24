import logo from './logo.svg';
import './App.css';

import Car from './Car';
import { useState } from 'react';


function App() {
  const cars = ["one", "two", "third"]
  const [count, setCount] = useState(1)

  const  countUpdate = () => {
    setCount(count + 1)
}
  return (
    <div>
    <div onClick={()=>{countUpdate()}}style={{height:100,width:100,backgroundColor:"red"}}></div>


      {
        cars.map((val) => <li>i am {val}</li> )
      }
    </div>

  );
}

export default App;

// top to bottom => waterfall => parent state child rerenders
/* App = parent component
car = child component
*/

