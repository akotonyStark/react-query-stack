import { useState } from 'react'
import './App.css'
import GetData from './components/GetData'
import PostData from './components/PostData'
import CustomHook from './components/CustomGetHook'
import CustomPostHook from './components/CustomPostHook'


export const apiURL = 'https://jsonplaceholder.typicode.com/todos'

function App() {
  const [state, setState] = useState('')

  return (
    <>
      <div className='App'>
        <button onClick={() => setState('GET')}>useGet</button><button onClick={() => setState('POST')}>usePost</button><button onClick={() => setState('CUSTOM_GET')}>useFetchCustom</button><button onClick={() => setState('CUSTOM_POST')}>usePostCustom</button>
        {state == 'POST' && <PostData/>}
        {state == 'GET' && <GetData/>  }
        {state == 'CUSTOM_GET' && <CustomHook/>}
        {state == 'CUSTOM_POST' && <CustomPostHook/>}
      </div>

    </>
  )
}

export default App
