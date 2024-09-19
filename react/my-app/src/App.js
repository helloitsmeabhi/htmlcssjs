import './App.css';
import  {Hello,ByeHello}  from './components/Hello';
function App() {
  return (
    <div className="App">
      <h1>Hello world</h1>
      <p>Hello its me abhinav</p>
      <Hello text="Hello how are u"/>
      <ByeHello/>
    </div>
  );
}

export default App;
