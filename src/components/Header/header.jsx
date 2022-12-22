import './headerStyle.css'
import { HeaderButton } from '../HeaderButton/HeaderButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'

export const Header = (props) => {
    return  <div className="headerContainer">
                <div className='logoContainer'>
                    <FontAwesomeIcon icon={faHeart} beat />
                    <h3 className='logo'>My FinishList</h3>
                </div>

                <div className='buttonContainer'>
                    <HeaderButton textButton='Ejemplo 1'></HeaderButton>
                    <div className='buttonDivisor'>|</div>
                    <HeaderButton textButton='Ejemplo 2'></HeaderButton>
                    <div className='buttonDivisor'>|</div>
                    <HeaderButton textButton='Ejemplo 3'></HeaderButton>
                </div>
            </div>
} 