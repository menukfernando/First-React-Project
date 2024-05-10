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
      <h1 className="title">Profile Card Maker with React</h1>
      <section className="class-list">
        {data}
      </section>
      <footer>@menukFernando</footer>
    </>
  )
}

export default App
