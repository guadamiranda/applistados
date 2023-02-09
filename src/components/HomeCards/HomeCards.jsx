import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './homeCardsStyle.css'

export const HomeCard = ({categoryDescription, categoryIcon, categoryName}) => {
    const[ realURL, setRealURL ] = useState("")

    const whatList = () => {
        const nameCategory = `/list${categoryName}`
        const categoriesURL = ["/listVideogames", "/listSeries", "/listMovies", "/listBooks"]

        for(let i = 0; i <= categoriesURL.length; i++){
            if(nameCategory === categoriesURL[i]){
                setRealURL(categoriesURL[i])
            }
        }
    }

    useEffect(() => {
        whatList()
    })
    return  <div className='homeCardContainer'>
                <Link to={realURL} state={{name: categoryName}} className='cardInsideTheCard'>
                    <div className='iconContainer'>
                        {categoryIcon}
                    </div>
                    <div className='nameContainer'>
                        ◖{categoryName}◗
                    </div>
                    <div className='descriptionContainer'>
                        "{categoryDescription}"
                    </div>
                </Link>
            </div>
}