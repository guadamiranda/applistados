import './allListsStyle.css'
import { ListCards } from '../../components/ListCards/ListCards'
import { useLocation, Link } from 'react-router-dom';
import { useEffect, useState } from 'react'
import { FaTrash, FaEdit, FaPlus } from 'react-icons/fa';
import { Header } from '../../components/Header/header';
import { Footer } from '../../components/Footer/footer';
import videogameServices from '../../services/videogameServices'

export const AllLists = (props) => {
    const [allVideogames, setAllVideogames] = useState([])
    const [isVisibleDelete, setIsVisibleDelete] = useState(false)
    const [isVisibleEdit, setIsVisibleEdit] = useState(false)
    const location = useLocation()
    const data = location.state

    const getFromApi = async() => {
        const allVideogames = await videogameServices.getAllVideogames()
        setAllVideogames(allVideogames)
    }

    useEffect(() => {
        getFromApi()
    }, [])

    return(
        <>
        <Header/>
        <div className='bodyAppList'>
            <div className='centerThis'>
                <div className='listNameContainer'>
                    <div className='borderListNameContainer'>
                        <span>◖{data.name}◗</span>
                    </div> 
                </div>
            </div>
            <div className='buttonAddContainer'>
                <Link to={"/addOrEditVideogame"} className='buttonAddEditDelete addButton'>Add <FaPlus className='iconAll greenButton'/></Link>
                <button className='buttonAddEditDelete editButton' onClick={() => {isVisibleEdit ? setIsVisibleEdit(false) : setIsVisibleEdit(true)}}>Edit <FaEdit className='iconAll blueButton'/></button>
                <button className='buttonAddEditDelete deleteButton' onClick={() => {isVisibleDelete ? setIsVisibleDelete(false) : setIsVisibleDelete(true)}}>Delete <FaTrash className='iconAll redButton'/></button>
            </div>
            <div className='allListCardsContainer'>
                {allVideogames.map(videogame => <ListCards key={videogame.name} name={videogame.name} description={videogame.description} url={videogame.url} platform={videogame.platform} isDeletedTrue={isVisibleDelete} isEditedTrue={isVisibleEdit}/> )}
            </div>
        </div>
        <Footer/>
        </>
        
    )
}