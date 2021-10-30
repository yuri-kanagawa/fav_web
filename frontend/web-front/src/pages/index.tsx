import React, { FC, useEffect, useState } from 'react'
import axios, { AxiosInstance } from 'axios'
import 'tailwindcss/tailwind.css'

type Fav = {
    id: string
    title: String
    body: String
}

export default (() => {
    const [favs, setFav] = useState<Fav[]>([])

    const getAPIData = async () => {
        let instance: AxiosInstance

        instance = axios.create({
            baseURL: 'http://localhost:8080',
        })

        try {
            const response = await instance.get('/api/')
            console.log(response?.data)
            const favdata = response?.data as Fav[]
            setFav(favdata)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className="text-4xl text-green-700 text-center font-semibold">
            hello world
            <button onClick={getAPIData} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">click</button>
            {favs.map((item) => (
                <div key={item.id}>
                    <h1>{item.title}</h1>
                    <p>{item.body}</p>
                </div>
            ))}
        </div>
    )
}) as FC