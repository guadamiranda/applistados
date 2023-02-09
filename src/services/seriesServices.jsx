import axios from 'axios';

const serie = {
    getAllSeries: async() => {
        try {
            const allSerie = await axios.get(`http://localhost:3001/serie/allSeries`)
            return allSerie.data.allSeries

        } catch(error){
            console.log(error)
        }
    }
}

export default serie;