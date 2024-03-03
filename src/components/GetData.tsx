import { useQuery } from '@tanstack/react-query'
import { Todo } from '../types/Todo.types'
import axios from 'axios'
import { apiURL } from '../App'


const useGet = (key:string, url: string) => {
  
  return useQuery({
    queryKey: [key],
    queryFn: () => axios.get(`${url}`).then((res) => res.data),
    //refetchOnWindowFocus: 'always' ,
    //staleTime: 10
    //refetchInterval: 5000
  })
}

const GetData = () => {
  const { data, isLoading, error } = useGet('posts', apiURL)

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>There was an error</div>
  }

  return (
    <div>
      <h2>Get API with useQuery</h2>
       {data?.map((todo: Todo) => {
          return <p key={todo.id}>id: {todo.id} title: {todo.title}</p>
        })}
    </div>
  )
}

export default GetData