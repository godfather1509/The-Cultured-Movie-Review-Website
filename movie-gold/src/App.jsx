import { useState, useEffect } from 'react'
import api from './api/axios_config'
import './App.css'

function App() {
  const [movies, setMovies] = useState([])

  const getMovies = async () => {

    try {
      const response = await api.get('/api/v1/movies')
      setMovies(response.data)
    } catch (err) {
      console.error('Fetch failed:', err)
    }
  }

  useEffect(() => { getMovies() }, [])
  useEffect(()=>{console.log(movies)},[movies])

  return (
    <>
    </>
  )
}

export default App
