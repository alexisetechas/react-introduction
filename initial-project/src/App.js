import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld'

function App() {

  const a = "Alexis"
  const b = "https://th.bing.com/th/id/R.9d5ba799ded60b4429169d8711f3f5f8?rik=%2bD2BYXv3N3knYA&riu=http%3a%2f%2fovernature.net%2fdownload%2f143-paisagem-foto-hd-inebriante-sol-amanhecer.jpg&ehk=XP9O%2b4O8FUSoZ5fifJevY3pall5ziuo9nzNQIOtvhPk%3d&risl=&pid=ImgRaw&r=0"
  function sum(a, b){
    return a + b
  }
  return (
    <div className="App">
      <h1>React Initial Project</h1>
      <p>Hello, my name is <b>{a}</b> and im initialing the web development in React.</p>
      <h3>SUM RESULT : {sum(1, 4)}</h3>
      <img src={b}/>
      <HelloWorld/>
    </div>
  );
}

export default App;
