import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import OnBoarding from './pages/OnBoarding'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {useCookies} from 'react-cookie'
import { useState } from 'react'

const App = () => {
    const [cookies, setCookie, removeCookie] = useCookies(['user']);
    const [gestDirection, setGestDirection] = useState(null)
    const authToken = cookies.AuthToken

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home setGestDirection={setGestDirection}/>}/>
                {authToken && <Route path="/dashboard" element={<Dashboard/>}/>}
                {authToken && <Route path="/onboarding" element={<OnBoarding gestDirection={gestDirection} setGestDirection={setGestDirection}/>}/>}

            </Routes>
        </BrowserRouter>
    )
}

export default App
