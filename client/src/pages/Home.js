import Nav from '../components/Nav'
import AuthModal from "../components/AuthModal"
import {useState} from 'react'
import {useCookies} from "react-cookie"

const Home = ({ setGestDirection }) => {
    
    const [showModal, setShowModal] = useState(false)
    const [isSignUp, setIsSignUp] = useState(true)
    const [cookies, setCookie, removeCookie] = useCookies(['user'])
    const authToken = cookies.AuthToken
    
    setGestDirection(null);
    const handleClick = () => {
        if (authToken) {
            removeCookie('UserId', cookies.UserId)
            removeCookie('AuthToken', cookies.AuthToken)
            window.location.reload()
            return
        }
        setShowModal(true)
        setIsSignUp(true)
    }

    return (
        <div className="overlay">
            <Nav
                authToken={authToken}
                minimal={false}
                setShowModal={setShowModal}
                showModal={showModal}
                setIsSignUp={setIsSignUp}
            />
          
            <div className="home">
                <h1 className="primary-title">Meet awesome people</h1>
                <button className="primary-button" onClick={handleClick}>
                    {authToken ? 'Signout' : 'Create Account'}
                </button>


                {showModal && (
                    <AuthModal  setShowModal={setShowModal} isSignUp={isSignUp}/>
                )}
            </div>
          
            {/* <div className='gesture-test'>
                <div className='gesture-h1'>
                <h1>{gestDirection}</h1>
                </div>
            
                <GestureCard  gestDirection={gestDirection} setGestDirection={setGestDirection}/>
                
            </div> */}
        </div>
    )
}
export default Home
