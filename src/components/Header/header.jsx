import './headerStyle.css'
import { HeaderButton } from '../HeaderButton/HeaderButton'

export const Header = (props) => {
    return  <div className="headerContainer">
                <div className='logoContainer'>
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