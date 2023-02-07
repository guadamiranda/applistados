import './allListsStyle.css'
import { ListCards } from '../../components/ListCards/ListCards'
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react'
import { FaTrash, FaEdit, FaPlus } from 'react-icons/fa';
import videogameServices from '../../services/videogameServices'

export const AllLists = (props) => {
    const [allItems, setAllItems] = useState([])
    const location = useLocation()
    const data = location.state

    const getFromApi = async() => {
        const allItems = await videogameServices.getAllVideogames()
        setAllItems(allItems)
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
                <button className='buttonAddEditDelete addButton'>Add <FaPlus className='iconAll greenButton'/></button>
                <button className='buttonAddEditDelete editButton'>Edit <FaEdit className='iconAll blueButton'/></button>
                <button className='buttonAddEditDelete deleteButton'>Delete <FaTrash className='iconAll redButton'/></button>
            </div>
            <div className='allListCardsContainer'>
                {allItems.map(allItems => <ListCards name={allItems.name} description={allItems.description} url={allItems.url} platform={allItems.platform}/> )}
            </div>
        </div>
    )
}