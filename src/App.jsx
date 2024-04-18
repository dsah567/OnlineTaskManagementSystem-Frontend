import React from 'react'
import UserContextProvider from "./context/UserContextProvider"
import Header from './components/Header'

function App() {
    return (
        <UserContextProvider>
            <Header/>
        </UserContextProvider>
    )
}

export default App
