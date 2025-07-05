import './App.css'
import { Car } from './Components/Car'

function App() {
  const greet = () =>{
    alert ('Welcome to Toyota!');
  };
  return (
    <>
    <Car onGreet={greet}/>
    </>
  );
}

export default App
