import react, {useState} from "react"

const App = () => {
  const [name, setName] = useState('TOTO')
  // trois ligne du dessous = ligne du dessus grtace au array destructuring
  // const nomdemonhook = usestate('string')
  // const name = nomdemonhook[0]
  // const setName = nomdemonhook [1]

function handleChange(evt) {
  setName(evt.target.value)
  console.log(evt)
}

// nous allons decouvrir 3 hooks
  // useState
  // useEffect
    // remplace componentDiMont et componentDidUpdate et compponentWillUnMount
  // useContext
    // usestate a l'echelle global de l'application

    
  return (
    <div>
    Hello {name}
    <h1>My name is {name}</h1>
    {/* le fait de ne pas mettre de parenthese a handlechange fait que la fonction n'est pas appeler au rendering */}
    <input type="text" value={name} onChange={handleChange}/>
    </div>
  )
}

export default App 