import { apiURL } from "../App"
import usePost from "../hooks/usePost"


const CustomPostHook = () => {
    const {response, isSuccess, isLoading, error, mutate} = usePost(apiURL)

    const handleSubmit = () => {
        let todo: any = {
            userId: 5000,
            id: Math.floor(Math.random() * 100000),
            title: 'The quick brown fox jumped over the lazy dog'
        }
        mutate(todo)
    }
    if(isSuccess){
        return <p>Post successfully saved</p>
    }

    if(error){
        return <p>Error Occured. Could not save</p>
    }

    if (isLoading) {
        return <p>Saving data...</p>
    }
    return (
        <div>
            <h2>POST api with custom UsePost hook</h2>
            <button onClick={handleSubmit}>Post inmemory data</button>
            <div>{JSON.stringify(response)}</div>
        </div>
    )
}

export default CustomPostHook