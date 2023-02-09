import './headerStyle.css'
import { Link } from 'react-router-dom'

export const Header = (props) => {
    return  <div className="headerContainer">
                <Link to={'/'} className='logoContainer'>
                    <h3 className='logo'><i>My FinishList</i></h3>
                </Link>
                <button></button>
            </div>
} 