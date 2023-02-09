import './addVideogameStyle.css'
import '../AllLists/allListsStyle.css'
import { Header } from '../../components/Header/header';
import { Footer } from '../../components/Footer/footer';
import { VscCircleFilled } from 'react-icons/vsc';
import { FaPlus } from 'react-icons/fa';

export const AddOrEditVideogame = () => {
    return(
        <>
        <Header/>

        <div className='bodyAddVideogame'>
            <div className='centerThis this'>
                <div className='listNameContainer'>
                    <div className='borderListNameContainer'>
                        <span>◖Add a new Videogame◗</span>
                    </div> 
                </div>
                <div className='formContainer'>
                    <br/>
                    <div><VscCircleFilled className='iconColorAddVideogame'/><span>Name: </span><input type='text' placeholder='Ex. Resident Evil 4'></input></div><br/>
                    <div><VscCircleFilled className='iconColorAddVideogame'/><span>Description: </span><input type='text' placeholder='Ex. Remake'></input></div><br/>
                    <div><VscCircleFilled className='iconColorAddVideogame'/><span>Platform:</span> <input type='text' placeholder='Ex. PC'></input></div><br/>
                    <div><VscCircleFilled className='iconColorAddVideogame'/><span>Inverted hours:</span> <input type='number' placeholder='Ex. 90'></input></div><br/>
                    <div><VscCircleFilled className='iconColorAddVideogame'/><span>URL: </span><input type='text' placeholder='An URL from Internet'></input></div><br/>
                </div>
            </div>

            <br/>

            <div className='buttonContainderAddVideogame'>
                <button className='buttonAddEditDelete addButton'>Add <FaPlus className='iconAll greenButton'/></button>
            </div>
        </div>

        <Footer/>
        </>
    )
}