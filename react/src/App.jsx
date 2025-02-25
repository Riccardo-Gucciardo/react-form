import { useState } from "react"

const titoList = ["the conjuring","ready number one","batman","mission impossible","warm bodies"]

function App() {
  const [firstName,setFirstName] = useState("Titolo")

  const [tasks,setTasks] = useState(titoList)

  const [newTasks,setNewTasks] = useState('')

  const handleChange = (e) => {
    console.log(e);
    console.log(e.target);
    setFirstName(e.target.value)
  }

  const addTasks = (e) => {
    e.preventDefault()
    const task = newTasks.trim()
    setTasks([...tasks,task])
    setNewTasks("")
  }

  return (
    <>
    <input type="text" value={firstName} onChange={handleChange}/>
     <p>il tuo titolo è: {firstName}</p>


     <div className="container mt-5 w-50">
      <h1>titoli</h1>
      <ul className="list-group">
        {
          tasks.map((element,index) => {
            return(
            <li key={index} className="list-group-item">
              {element}
            </li>
            )
          })
        }
      </ul>


      <form onSubmit={addTasks}>
      <input type="text" className="form-control" placeholder="aggiungi titolo" value={newTasks} onChange={(e) => setNewTasks(e.target.value)}/>
     <button className="btn btn-primary mt-3">aggiungi</button>
     </form>
     </div>
     </>
   
  )
}

export default App
