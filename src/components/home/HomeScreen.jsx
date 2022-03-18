import React, { useContext, useEffect } from 'react'
import queryString from 'query-string'
import { Outlet, useLocation, useParams } from 'react-router-dom'
import { ImageContext } from '../../context/imageContext'
import { Header } from '../ui/Header'

export const HomeScreen = () => {
  const { changeNavVisibility, setImageName, filtersApplied, setFiltersApplied } = useContext(ImageContext)

  const { search } = useLocation();

  const { imageId = '' } = useParams()

  useEffect(() => {
    setImageName(imageId)
    setFiltersApplied(queryString.parse(search))
  }, [])
  

  console.log("Cargada HomeScreen")
  
  return (
        <main className="App">
            <Header {...{changeNavVisibility}} />
            <div className="container-fluid">
            <div className="row">
                <Outlet />
            </div>
            </div>
        </main>
  )
}
