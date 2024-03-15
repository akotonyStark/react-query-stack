import axios from "axios"
import { useState } from "react"


const usePost = (url: string) => {

    const [response, setResponse] = useState<any>(null)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<any>(null)
    const [isSuccess, setIsSuccess] = useState<boolean>(false)


    const mutate = async(payload:any) => {
        setIsLoading(true)
        try{
            let response = await axios.post(url, payload)
            //console.log(response, 'RESPONSE')
            setIsSuccess(true)
            let data = response.data
            setResponse(data)
        }
        catch(error){
            setError(error)
        }
        finally{
            setIsLoading(false)
        }
        
    }

  return {response, error, isSuccess, isLoading, mutate}
}

export default usePost