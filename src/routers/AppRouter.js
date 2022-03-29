import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import Home from '../components/Home';
import SearchPage from '../components/SearchPage';
import { Route, Routes } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Tacos from '../components/Tacos';
import TacoDetails from '../components/TacoDetails';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Navbar />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/search-page" element={<SearchPage />} />
                <Route path="/tacos" element={<Tacos />} />

                <Route path="/tacos/:tacoName" element={<Tacos />} >
                    <Route path="details" element={<TacoDetails />} />
                </Route>

                <Route path="*" element={<h1>404 Not Found</h1>} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter