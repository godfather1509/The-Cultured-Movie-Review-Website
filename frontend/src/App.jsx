import { useState, useEffect, useContext, createContext } from 'react'
import { Route, Routes, RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import api from './api/axiosConfig'
import Layout from './components/Layout'
import NotFound from './components/NotFound'
import Home from './components/home/Home'
import movieContext from './components/contexts/movieContext'

function App() {
  const [movies, setMovies] = useState([])

  const getMovies = async () => {
    try {
      const response = await api.get("/api/v1/movies")
      console.log(response.data)
      setMovies(response.data)
    }
    catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getMovies()
  }, [])

  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <>
          <Layout/>
          <Home />
        </>
      },
      {
        path: "*",
        element: <>
          <NotFound />
        </>
      }
    ]
  )

  return (
    <>
    <div className='App'>
      <movieContext.Provider value={{ movies, setMovies }}>
        <RouterProvider router={router} />
      </movieContext.Provider>
      </div>
    </>
  )
}

export default App