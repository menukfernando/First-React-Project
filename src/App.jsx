import React from "react"
import './App.css'
import Grid from "./components/grid"
import Data from "./components/data"

function App() {
    const data = Data.map((person) => {
      return(
        <Grid 
          key={person.id}
          person={person}
        />
      )
    })

  return (
    <>
    <section className="class-list">
      {data}
    </section>
      
    </>
  )
}

export default App
