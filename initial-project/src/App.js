import logo from './logo.svg';
import './App.css';
import SayMyName from './components/SayMyName'
import HelloWorld from './components/HelloWorld';
import Person from './components/Person';
import Text from './components/Text'

function App() {
  const nome = "Maria"
  return (
    <div className="App">
      <Text/>
      <SayMyName nome="Alexis"/>
      <SayMyName nome={nome}/>
      <Person nome= "Rodrigo " idade = "28" profissao="programador" foto="https://static1.squarespace.com/static/5c3e25923e2d0977a884f82c/5c3f4b9e010685e0e261593a/5c3f4e6a010685e0e261b6ea/1547652714741/IMG_1322.jpg?format=original"/>
    </div>
  );
}

export default App;
