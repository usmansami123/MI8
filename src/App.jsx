import { useState } from 'react' 
import './App.css'
import Form from './components/Form'
import Table from './components/Table'

  function App() {
    const [count, setCount] = useState(0)
    

    return (
<>
<Form/>
<Table/>
</>
    )
  }

export default App

