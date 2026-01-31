
import './App.css'
import Header from './Header'

function App() {
  return (
    <div style={{
      height: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent:"center",
      fontSize: "40px"
    }}>

      <div style={{
        border:"1px solid  #ccc",
        padding:"8px",
        boxShadow: "10px",
        maxWidth: "400px",
        width: "80%"
      }}>

        <h1 style={{
          textAlign:"center",
          fontSize: "30px"
        }}>my project</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas, aperiam.</p>

      </div>
    

    
    </div>
  )
}

export default App
