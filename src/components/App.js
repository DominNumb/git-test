import '../App.css'

export default function App() {
  return (
    <div className="App">
      <div style={{ background: 'grey' }}>
        <h1 style={{ color: 'white' }}>Nadpis</h1>
        <input type="text" value="" placeholder="Username" />
        <br />
        <input type="password" value="" placeholder="Password" />
        <br />
        <button>Login</button>
      </div>
    </div>
  )
}
