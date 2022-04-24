import '../App.css'

export default function App() {
  return (
    <div className="App">
      <div style={{ background: 'grey' }}>
        <h1 style={{ color: 'white' }}>Nadpis</h1>
        <input type="text" placeholder="Type username" />
        <br />
        <input type="password" placeholder="Type password" />
        <br />
        <button>Login</button>

        <button>Register</button>
        <br />
        <button>Refresh App</button>

        <button>Close App</button>
        <br />
      </div>
    </div>
  )
}
