import { useEffect, useState } from 'react'
import axios from 'axios'

export const useRequestData = (url) => {
    const [data, setData] = useState(undefined)
    const [isLoading, setIsLoading] = useState(undefined)
    const [error, setError] = useState(undefined)

    useEffect(() => {
        getData()
    }, [])

    const myHeaders =  {
        headers:{
            auth: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImdQWEpmUnRjT3g2UlNxajRLSkJTIiwibmFtZSI6Ik9rdSBUaWtvbW8iLCJlbWFpbCI6Im9rdUB0aWtvbW8uY29tIiwiY3BmIjoiMTIzLjQ1Ni43ODktMDIiLCJoYXNBZGRyZXNzIjp0cnVlLCJhZGRyZXNzIjoiUi4gQWZvbnNvIEJyYXosIDE3NywgNzEgLSBWaWxhIE4uIENvbmNlacOnw6NvIiwiaWF0IjoxNjYzNTIwNTYyfQ.F5bAJPho60lG1p7yUzvf-Fg0xC0F8n7Xc9W3hu2mnAo"
        }
    }

    const getData = () => {
        setIsLoading(true);
        axios.get(url, myHeaders)
            .then(response => {
                setIsLoading(false)
                setData(response.data.restaurants)
            }).catch(err => {
                setIsLoading(false)
                setError(err)
            })
    }

    return [data, isLoading, error, getData];
}