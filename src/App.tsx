import { useState } from 'react'
import './App.css'
import GetData from './components/GetData'
import PostData from './components/PostData'


export const apiURL = 'https://jsonplaceholder.typicode.com/todos'

function App() {
  const [state, setState] = useState('')

  return (
    <>
      <div className='App'>
        <button onClick={() => setState('GET')}>useGet</button><button onClick={() => setState('POST')}>usePost</button>
        <PostData/>
        <GetData/>  
      </div>

    </>
  )
}

export default App
