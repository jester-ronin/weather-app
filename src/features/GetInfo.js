import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setCityData } from '../Redux/actions';



const GetInfo = () => {
    const dispatch = useDispatch();
    let cities = useSelector(state => state.reducer.cities);
    const apiKey = 'e470665d754ce23794a8a148241467d0';


    if (Array.isArray(cities) && cities.length > 0) {
        cities.map((city) => {
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city.name}&appid=${apiKey}`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error("Network response was not ok")
                    }
                    return response.json()
                })
                .then(data => {
                    console.log(data);
                    dispatch(setCityData(city.id,data))
                })

                .catch(error => {
                    console.error('There was a problem', error)
                })
        })
    }
    else {
        console.log("storage is empty")
    }


}

export default GetInfo;