import React from 'react'
import AppRouter from './routers/AppRouter';
import "./styles/index.scss";

const App = () => {
    return (
        <div className="app">
            <AppRouter />
        </div>
    )
}

export default App