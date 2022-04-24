import '../App.css'

export default function App() {
  return (
    <div className="App">
      <div style={{ margin: 100 }}>
        <h1 style={{ color: 'white' }}>Nadpis</h1>
        <input style={{ margin: 5 }} type="text" placeholder="Type username" />
        <br />
        <input
          style={{ margin: 5 }}
          type="password"
          placeholder="Type password"
        />
        <br />
        <button style={{ margin: 5 }}>Login</button>
        <button style={{ margin: 5 }}>Register</button>
      </div>
    </div>
  )
}
