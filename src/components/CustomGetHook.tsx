import { apiURL } from "../App"
import useFetch from "../hooks/useFetch"
import { Todo } from "../types/Todo.types"


function CustomHook() {
 const {data, isLoading, error} = useFetch(apiURL)

 if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>There was an error</div>
  }

  return (
    <div>
         <h2>Get API with custom hook - useFetch</h2>
         {data?.map((item: Todo) => <p key={item.id}>{item.title}</p>)}
    </div>
  )
}

export default CustomHook