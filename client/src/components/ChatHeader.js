import { useCookies } from 'react-cookie'
import backArrow from './../pages/images/backArrow.png'
import { createBrowserHistory } from 'history'

const ChatHeader = ({ user }) => {
    const [ cookies, setCookie, removeCookie ] = useCookies(['user'])
    const history = createBrowserHistory()
    const position = '/';
    const logout = () => {
        removeCookie('UserId', cookies.UserId)
        removeCookie('AuthToken', cookies.AuthToken)
        history.replace(position)
        window.location.reload()
      
    }

    return (
        <div className="chat-container-header">
            <div className="profile">
                <div className="img-container">
                    <img src={user.url} alt={"photo of " + user.first_name}/>
                </div>
                <h3>{user.first_name}</h3>
            </div>
            {/* <i className="log-out-icon" onClick={logout}>⇦</i> */}
            <img src={backArrow} className='log-out icon' onClick={ logout }></img>
        </div>
    )
}

export default ChatHeader