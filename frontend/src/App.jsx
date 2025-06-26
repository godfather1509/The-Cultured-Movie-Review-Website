import { useState, useEffect } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import api from './api/axiosConfig'
import Layout from './components/Layout'
import { Route,Routes } from 'react-router-dom'

function App() {
  const [movies, setMovies] = useState(0)

  const getMovies = async () => {
    try {
      const response = await api.get("/api/v1/movies")
      console.log(response.data)
      setMovies(response)
    }
    catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getMovies()
  }, [])

  return (
    <>
    <Routes>
      <Route path='/' element={Layout}>

      </Route>
      </Routes>
    </>
  )
}

export default App
