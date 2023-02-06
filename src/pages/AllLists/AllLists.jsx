import './allListsStyle.css'
import { ListCards } from '../../components/ListCards/ListCards'
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react'
import videogameServices from '../../services/videogameServices'

export const AllLists = (props) => {
    const [allVideogames, setAllVideogames] = useState([])
    const location = useLocation()
    const data = location.state

    const getFromApi = async() => {
        const allVideogames = await videogameServices.getAllVideogames()
        console.log(allVideogames)
        setAllVideogames(allVideogames)
    }

    useEffect(() => {
        getFromApi()
    }, [])

    return(
        <div className='bodyAppList'>
            <div className='centerThis'>
                <div className='listNameContainer'>
                    <div className='borderListNameContainer'>
                        <span>◖{data.name}◗</span>
                    </div> 
                </div>
            </div>
            <div className='buttonAddContainer'>
                <button>Hola</button>
            </div>
            <div className='allListCardsContainer'>
                {allVideogames.map(videogame => <ListCards name={videogame.name} description={videogame.description} url={videogame.img}/> )}
            </div>
        </div>
    )
}