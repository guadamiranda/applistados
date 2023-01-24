import { Link } from "react-router-dom";
import './homeCardsStyle.css'

export const HomeCard = ({categoryDescription, categoryIcon, categoryName}) => {
    return  <div className='homeCardContainer'>
                <Link to={"/list"} state={{name: categoryName}} className='cardInsideTheCard'>
                    <div className='iconContainer'>
                        {categoryIcon}
                    </div>
                    <div className='nameContainer'>
                        ◖{categoryName}◗
                    </div>
                    <div className='descriptionContainer'>
                        "{categoryDescription}"
                    </div>
                </Link>
            </div>
}