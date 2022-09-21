import { useEffect, useState } from 'react'
import axios from 'axios'

export const useRequestData = (url) => {
    const [data, setData] = useState(undefined)
    const [isLoading, setIsLoading] = useState(undefined)
    const [error, setError] = useState(undefined)

    const token = localStorage.getItem('token')

    useEffect(() => {
        getData()
    }, [])

    const myHeaders =  {
        headers:{
            auth: token
        }
    }

    const getData = () => {
        setIsLoading(true);
        axios.get(url, myHeaders)
            .then(response => {
                setIsLoading(false)
                setData(response.data)
            }).catch(err => {
                setIsLoading(false)
                setError(err)
            })
    }

    return [data, isLoading, error, getData];
}