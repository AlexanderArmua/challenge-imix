import React, { useContext, useEffect } from 'react'
import queryString from 'query-string'
import { Outlet, useLocation, useParams } from 'react-router-dom'
import { ImageContext } from '../../context/imageContext'
import {images} from "../../helpers/images";
import { Header } from '../../containers/header/Header'

export const HomeScreen = () => {
  const { changeNavVisibility, setImageName, setFiltersApplied } = useContext(ImageContext)

  const { search } = useLocation();

  const { imageId = images[0].name } = useParams()

  useEffect(() => {
    setImageName(imageId)
    setFiltersApplied(queryString.parse(search))
  }, [])
    
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
