import '../AllLists/allListsStyle.css'
import { ListCards } from '../../components/ListCards/ListCards'
import { useLocation, Link } from 'react-router-dom';
import { useEffect, useState } from 'react'
import { FaTrash, FaEdit, FaPlus } from 'react-icons/fa';
import { Header } from '../../components/Header/header';
import { Footer } from '../../components/Footer/footer';
import { Loader } from '../../components/Loader/Loader';
import seriesServices from '../../services/seriesServices'

export const SeriesList = (props) => {
    const [allSeries, setAllSeries] = useState([])
    const [isVisibleDelete, setIsVisibleDelete] = useState(false)
    const [isVisibleEdit, setIsVisibleEdit] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const location = useLocation()
    const data = location.state

    const getFromApi = async() => {
        const allSeries = await seriesServices.getAllSeries()
        setAllSeries(allSeries)
        setTimeout(function() {
            setIsLoading(false)
        }, 1000)
    }

    useEffect(() => {
        setIsLoading(true)
        getFromApi()
    }, [])

    return(
        <>
        <Header/>
        <div className='bodyAppList'>
        {isLoading === true ? <div className='loaderPosition'><Loader ></Loader></div> : 
            <>
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
                {allSeries.map(serie => <ListCards key={serie.name} name={serie.name} description={serie.description} url={serie.url} platform={serie.platform} isDeletedTrue={isVisibleDelete} isEditedTrue={isVisibleEdit}/> )}
            </div>
            </>}
        </div>
        <Footer/>
        </>
        
    )
}