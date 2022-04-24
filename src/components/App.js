import '../App.css'

export default function App() {
  return (
    <div className="App">
      <div style={{ background: 'grey' }}>
        <h1 style={{ color: 'white' }}>Nadpis</h1>
        <input type="text" value="" placeholder="Type username" />
        <br />
        <input type="password" value="" placeholder="Type password" />
        <br />
        <button>Login</button>
        <br />
        <button>Register</button>
        <br />
        <button>Refresh App</button>
        <br />
      </div>
    </div>
  )
}
