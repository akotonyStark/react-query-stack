import {  useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import { apiURL } from '../App'


const usePost = ( url: string) => {
    return useMutation({
         //mutationKey: [key],
         mutationFn: (post) => axios.post(`${url}`, post).then((res) => res.data) 
    })
}


const PostData = () => {
    const { mutate, isPending, isError, isSuccess } = usePost( apiURL)
    const queryClient = useQueryClient()

    const handleSubmit = () => {
        let todo: any = {
            userId: 5000,
            id: Math.floor(Math.random() * 100000),
            title: 'The quick brown fox jumped over the lazy dog'
        }
        mutate(todo, {
            onSuccess(data) {
                queryClient.setQueryData(['posts'], (oldData: any) => [...oldData, data])
            },
            onError(error){
                console.log(error)
            }
        })
    }
    if(isSuccess){
        return <p>Post successfully saved</p>
    }

    if(isError){
        return <p>Error Occured. Could not save</p>
    }

    if (isPending) {
        return <p>Saving data...</p>
    }
    return (
        <div>
            <h2>POST api with useMutation</h2>
            <button onClick={handleSubmit}>Post inmemory data</button>
        </div>
    )
}

export default PostData