import './homePageStyle.css'
import { HomeCard } from '../../components/HomeCards/HomeCards'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGamepad, faDragon, faFilm, faBook, faStar } from '@fortawesome/free-solid-svg-icons'
import { VscCircleFilled, VscCircleLargeFilled } from 'react-icons/vsc'

const categoriesInfo = [
    {
        name: 'Videogames',
        description: 'The Cake is a Lie',
        icon: <FontAwesomeIcon icon={faGamepad}></FontAwesomeIcon>
    },
    {
        name: 'Books',
        description: 'Always',
        icon: <FontAwesomeIcon icon={faBook}></FontAwesomeIcon>
    },
    {
        name: 'Series',
        description: 'Winter is Coming',
        icon: <FontAwesomeIcon icon={faDragon}></FontAwesomeIcon>
    },
    {
        name: 'Movies',
        description: 'To Infinity and Beyond',
        icon: <FontAwesomeIcon icon={faFilm}></FontAwesomeIcon>
    }
]

export const HomePage = (props) => {

    const Circles = () => {
        const allCircles = []
        for(let i = 0; i <= 30; i++){
            (i % 2 === 0 ? allCircles.push(<VscCircleFilled id='littleCircle'/>) : allCircles.push(<VscCircleLargeFilled id='bigCircle'/>) )
        }

        return allCircles
    }

    return  <div className='bodyApp'> 
                <div className='homeTitle'>
                    <div className='inlineStarAndTitle'><h4><FontAwesomeIcon icon={faStar} spin/></h4> <h3>  Categories </h3> <h4><FontAwesomeIcon icon={faStar} spin/></h4></div>                  
                    <p>Choose a category to see your finished list</p>
                </div>
                <div className='cardsContainer'>
                    {categoriesInfo.map(category => <HomeCard key={category.name} categoryDescription ={category.description}
                                                                                  categoryIcon={category.icon}
                                                                                  categoryName={category.name} />)}   
                </div>
                <div>
                    <Circles/>
                </div>      
            </div>
}
