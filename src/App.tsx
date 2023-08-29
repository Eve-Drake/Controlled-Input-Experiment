import { useState } from 'react'
import './index.css'

function App() {
  const [colourName, setColourName] = useState<string>('')

  const handleColours =(e : string)=>{
    e = e.split(' ').join('')
    setColourName(e)
  }

  return (
    <main>
      <h1>Input a CSS Colour and it will be displayed</h1>
      <div className='colour-box' style={{backgroundColor: `${colourName}`}}></div>



      <input type='text'onChange={(e) => handleColours(e.target.value)} placeholder='Enter a Colour'/>

    </main>
  )
}

export default App
