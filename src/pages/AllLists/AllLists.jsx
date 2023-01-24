import './allListsStyle.css'
import { ListCards } from '../../components/ListCards/ListCards'
import { useLocation } from 'react-router-dom';

export const AllLists = (props) => {
    const location = useLocation()
    const data = location.state

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
                <ListCards/>
                <ListCards/>
                <ListCards/>
                <ListCards/>
                <ListCards/>
                <ListCards/>
                <ListCards/>
                <ListCards/>
                <ListCards/>
                <ListCards/>
                <ListCards/>
            </div>
        </div>
    )
}