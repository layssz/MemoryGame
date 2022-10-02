import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Frase from './components/Frase';

function App() {

  
  return (
    <div className="App">
     <h1> Olá estou começanco a programar no React :v</h1>
     <img src={logo} className="App-logo" alt="logo" />
     <SayMyName nome="lays"/>
     <Frase/>
     <HelloWorld/>
    </div>
  );
}

export default App;
