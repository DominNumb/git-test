import '../App.css'

export default function App() {
  return (
    <div className="App">
      <div style={{ background: 'grey' }}>
        <h1 style={{ color: 'white' }}>Please LogIn</h1>
        <input value="" placeholder="Username" />
        <br />
        <input type="password" value="" placeholder="Password" />
        <br />
        <button>Login</button>
      </div>
    </div>
  )
}
