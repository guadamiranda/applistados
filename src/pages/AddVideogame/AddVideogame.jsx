import './addVideogameStyle.css'
import '../AllLists/allListsStyle.css'
import { Header } from '../../components/Header/header';
import { Footer } from '../../components/Footer/footer';

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
                    <div><span>Game name: </span><input type='text' placeholder='Ex. Resident Evil 4'></input></div>
                    <div><span>Description: </span><input type='text' placeholder='Ex. Remake'></input></div>
                    <div><span>Platform:</span> <input type='text' placeholder='Ex. PC'></input></div>
                    <div><span>Inverted hours:</span> <input type='number' placeholder='Ex. 90'></input></div>
                    <div><span>URL: </span><input type='text' placeholder='An URL from Internet'></input></div>
                </div>
            </div>
        </div>

        <Footer/>
        </>
    )
}