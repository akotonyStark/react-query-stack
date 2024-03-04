import axios from "axios"
import { useEffect, useState } from "react"


const useFetch = (url: string) => {
    const [data, setData] = useState<any[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<any>(null)

    useEffect(() => {
        const fetchData = async() => {
            setIsLoading(true)
            setError(null)
            try{
                const res = await axios.get(url)
                const data: [] = res.data
                setData(data)
            }
            catch(error){
                setError(error)
            }
            finally{
                setIsLoading(false)
            }
            
           
        }

        fetchData()
        
    }, [])

    return {isLoading, data, error}
}

export default useFetch