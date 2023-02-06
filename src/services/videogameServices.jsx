import axios from 'axios';

const videogame = {
    getAllVideogames: async() => {
        try {
            const allVideogames = await axios.get(`http://localhost:3001/videogame/allvideogames`)
            return allVideogames.data.allVideogames

        } catch(error){
            console.log(error)
        }
    }
}

export default videogame;