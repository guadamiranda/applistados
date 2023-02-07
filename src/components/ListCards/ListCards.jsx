import './listCardsStyle.css'

export const ListCards = ({name, description, url, platform}) => {
    return( 
        <div className='listCardCard'>
            <div className='imageListCard'>
                <img alt={url} src={url}></img>
            </div>
            <div className='nameDescriptionContainer'>
                <div className='nameOfCard'>
                    <b>{name}</b>
                </div>
                <div className='descriptionOfCard'>
                    {description}
                </div>
                <div className='descriptionOfCard'>
                    {platform}
                </div>
            </div>
        </div> 
    )
}