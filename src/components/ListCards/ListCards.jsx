import './listCardsStyle.css'

export const ListCards = (props) => {
    return( 
        <div className='listCardCard'>
            <div className='imageListCard'>
            </div>
            <div className='nameDescriptionContainer'>
                <div className='nameOfCard'>
                    Ejemplo de nombre
                </div>
                <div className='descriptionOfCard'>
                    Temporada 3
                </div>
            </div>
        </div> 
    )
}