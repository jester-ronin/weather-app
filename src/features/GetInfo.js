import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setJsonData } from '../Redux/actions';



const GetInfo = () => {
    const dispatch = useDispatch();
    let city = useSelector(state => state.reducer.city);
    const apiKey = 'e470665d754ce23794a8a148241467d0';

    if (city) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error("Network response was not ok")
                }
                return response.json()
            })
            .then(data => {
                console.log(data);
                dispatch(setJsonData(data))
            })

            .catch(error => {
                console.error('There was a problem', error)
            })
    }
    else {
        console.log("storage is empty")
    }


}

export default GetInfo;