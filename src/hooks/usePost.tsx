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
            let res = await axios.post(url, payload)

            if(res.status == 201){
                setIsSuccess(true)
               
            }
            let data = res.data
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