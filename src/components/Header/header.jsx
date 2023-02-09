import './headerStyle.css'
import { HeaderButton } from '../HeaderButton/HeaderButton'
import { Link } from 'react-router-dom'

export const Header = (props) => {
    return  <div className="headerContainer">
                <Link to={'/'} className='logoContainer'>
                    <h3 className='logo'><i>My FinishList</i></h3>
                </Link>

                <div className='buttonContainer'>
                    <HeaderButton textButton='Ejemplo 1'></HeaderButton>
                    <div className='buttonDivisor'>|</div>
                    <HeaderButton textButton='Ejemplo 2'></HeaderButton>
                    <div className='buttonDivisor'>|</div>
                    <HeaderButton textButton='Ejemplo 3'></HeaderButton>
                </div>
            </div>
} 