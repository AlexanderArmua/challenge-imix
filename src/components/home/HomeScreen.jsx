import React, { useContext, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { ImageContext } from '../../context/imageContext'
import { Header } from '../ui/Header'

export const HomeScreen = () => {
  const { changeNavVisibility } = useContext(ImageContext)

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
