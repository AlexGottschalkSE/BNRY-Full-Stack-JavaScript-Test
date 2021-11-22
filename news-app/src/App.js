import './App.css'

function App() {
  return <div className='app'>

    <button onClick={() => {
      fetch('http://localhost:8080/bitcoin')
        .then((res) => res.json())
        .then(console.log);
    }}>Display Bitcoin Data
    </button>

    <button onClick={() => {
      fetch('http://localhost:8080/headlines')
        .then((res) => res.json())
        .then(console.log);
    }}>Display Top Headlines
    </button>
  </div>
}
export default App;
