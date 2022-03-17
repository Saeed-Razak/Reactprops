import React from 'react'
import NavBar from './components/NavBar'
import Todo from "./components/Todo"

function App() {
  let title= "My first react app"
  return (
    <div>
      <NavBar title={title} />
      <main>
        <Todo title="learning react" datetime="23rd March 2022"/>
        <Todo title="Premest training" datetime="2nd January 2022"/>
        <Todo title="Designing Ghana flag" datetime="3rd April 2022" />
        <Todo title="independence day" datetime="6th March 2022" />
        <Todo title="Depreciating cedis" datetime="5th May 2022" />
                

      </main>
    </div>
  )
}

export default App