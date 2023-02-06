import './listCardsStyle.css'

export const ListCards = ({name, description, url}) => {
    return( 
        <div className='listCardCard'>
            <div className='imageListCard'>
                <img src={url}></img>
            </div>
            <div className='nameDescriptionContainer'>
                <div className='nameOfCard'>
                    {name}
                </div>
                <div className='descriptionOfCard'>
                    {description}
                </div>
            </div>
        </div> 
    )
}