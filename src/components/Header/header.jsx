import './headerStyle.css'
import { Link } from 'react-router-dom'

export const Header = (props) => {
    return  <div className="headerContainer">
                <Link to={'/'} className='logoContainer'>
                    <h3 className='logo'><i>My FinishList</i></h3>
                </Link>
                <div className='buttonSingInLogInContainter'>
                    <button>Sing In</button>
                    <button>Log In</button>
                </div>
            </div>
} 