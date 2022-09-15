import React from "react";
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import {
    HomePage,
    FeedPage,
    SignUpPage,
    AdressPage
} from '../pages'


export function RoutesComponent() {
    return(
        <BrowserRouter>
            <Routes>
                <Route index element={<HomePage/>}/>
                <Route path="/feed" element={<FeedPage/>}/>
                <Route path="/signup" element={<SignUpPage />}/>
                <Route path="/adress" element={<AdressPage />}/>
            </Routes>
        </BrowserRouter>
    )
}