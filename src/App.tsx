import { useState } from 'react'
import './App.css'
import GetData from './components/GetData'
import PostData from './components/PostData'
import CustomHook from './components/CustomHook'


export const apiURL = 'https://jsonplaceholder.typicode.com/todos'

function App() {
  const [state, setState] = useState('')

  return (
    <>
      <div className='App'>
        <button onClick={() => setState('GET')}>useGet</button><button onClick={() => setState('POST')}>usePost</button><button onClick={() => setState('CUSTOM')}>useFetch</button>
        {state == 'POST' && <PostData/>}
        {state == 'GET' && <GetData/>  }
        {state == 'CUSTOM' && <CustomHook/>}
      </div>

    </>
  )
}

export default App
