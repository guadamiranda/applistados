import './homeCardsStyle.css'

export const HomeCard = ({categoryDescription, categoryIcon, categoryName}) => {
    return  <div className='homeCardContainer'>
                <div className='cardInsideTheCard'>
                    <div className='iconContainer'>
                        {categoryIcon}
                    </div>
                    <div className='nameContainer'>
                        ◖{categoryName}◗
                    </div>
                    <div className='descriptionContainer'>
                        "{categoryDescription}"
                    </div>
                </div>
            </div>
}