import logo from './logo.svg';
import './App.css';
import { Counter1 } from './components/Counter1';
import Posts from './components/SecondQues.jsx/Post';
import { Restaurant } from './components/Restaurant';

function App() {
  return (
    <div className="App">
   {/* <Counter1/> */}
{/* <h1>show post</h1>
   <Posts/> */}
   <Restaurant/>
    </div>
  );
}

export default App;
