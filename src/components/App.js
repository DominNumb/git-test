import '../App.css'

export default function App() {
  return (
    <div className="App">
      <div style={{ background: 'grey' }}>
        <h1 style={{ color: 'white' }}>Nadpis</h1>
        <input type="text" value="Write Username" placeholder="Username" />
        <br />
        <input type="password" value="Write Password" placeholder="Password" />
        <br />
        <button>Login</button>
        <br />
        <button>Register</button>
        <br />
        <button>Close</button>
      </div>
    </div>
  )
}
