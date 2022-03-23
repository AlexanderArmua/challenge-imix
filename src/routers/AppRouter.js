import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Routes
  } from 'react-router-dom'
import { ImageScreen } from '../views/imageScreen/ImageScreen'
import { HomeScreen } from '../views/homeScreen/HomeScreen'
 
export const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={ <HomeScreen/> } >
                    <Route index element={ <ImageScreen /> } />
                    <Route index path="/:imageId" element={ <ImageScreen /> } />
                </Route>
            </Routes>
        </Router>
    )
}
