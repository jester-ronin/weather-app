import React from 'react'
import { useSelector } from 'react-redux';

export const Converter = () => {
  let data = useSelector(state => state.reducer.jsonData);

  function temperatureConverter(data) {
     let result = data.main.temp -273.15;
     console.log(result)
     result = String(result)
     console.log()
     return result.slice(0,3)
  }

  return (
    <div>Converter
      <p>{temperatureConverter(data)}</p>
    </div>
  )
}
