import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Routes
  } from 'react-router-dom'
import { HomeScreen } from '../components/home/HomeScreen'
import { ImageScreen } from '../components/imagescreen/ImageScreen'
 
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
