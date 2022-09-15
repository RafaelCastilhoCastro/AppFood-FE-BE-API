import React from "react";
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import {
    Homepage,
    Feedpage
} from '../pages'


export function RoutesComponent() {
    return(
        <BrowserRouter>
            <Routes>
                <Route index element={<Homepage/>}/>
                <Route path="/feed" element={<Feedpage/>}/>
            </Routes>
        </BrowserRouter>
    )
}