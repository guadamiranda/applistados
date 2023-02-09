import './footerStyle.css'
import { GiTwirlyFlower } from 'react-icons/gi';
import axios from 'axios'; 
import { useEffect, useState } from 'react';


export const Footer = (props) => {
    const [eeveeImg, setEeveeInfo] = useState("")
    const [displayEevee, setDisplayEevee] = useState(false)

    const fetchEevee = async () => {
        await axios.get("https://pokeapi.co/api/v2/pokemon/eevee").then(
            function(response){
                setEeveeInfo(response.data.sprites.front_default)
            }
        )
    }

    const LotOfEevees = () => {
        const eevees = []
        for(let i = 0; i <= 2; i++){
            eevees.push(<img alt="eevee" className="imgEevee" src={eeveeImg}></img>)
        }
        return(
            eevees
        )
    }

    useEffect(() => {
        fetchEevee()
    })

    return  <div className='footerContainer'>
                {displayEevee ? <LotOfEevees/> : <></>}
                <GiTwirlyFlower className='iconFlower'/> Made with a lot of <div className='spaceBetween' onClick={() => setDisplayEevee(true)}>❤️</div> by Guadalupe Miranda <GiTwirlyFlower className='iconFlower'/>
                {displayEevee ? <LotOfEevees/> : <></>}
            </div>
} 