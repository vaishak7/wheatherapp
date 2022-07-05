import React,{useState} from 'react';
import axios from 'axios'

function App() {
  const [data,setData] = useState({})
  const[location,setLocation] = useState('')


  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=0275c34ea14b054db22ffe2fb67f3b59`; 

  const searchLocation = (event)=>{
    if(event.key==='Enter'){
      axios.get(url).then((response)=>{
        setData(response.data)
        console.log(response.data)
      })
      setLocation('')

    }
  }




  return (
    <div className="app">
      <div className='search'>
        <input
        className="input"
        value={location}
        onChange={event=> setLocation(event.target.value)}
        onKeyPress={searchLocation}
        placeholder='Enter Location'
        type='text'
        />

      </div>
     <div className='container'>
       <div className='top'>
         <div className='location'>
           <p>{data.name}</p>
         </div>
         <div className='temp'>
         {data.main ?<h1> {data.main.temp.toFixed()} °F</h1>:null}

         </div>
         <div className='description'>
         {data.weather ?<h2> {data.weather[0].main} </h2>:null}</div>  
       </div>

       {data.name !== undefined&&
       <div className='bottom'>
       <div className='feels'>
           {data.main ? <p className='bold'>{data.main.feels_like} °F</p>:null}
           <p>Feels like</p>
         </div>
         <div className='humidity'>
         {data.main ? <p className='bold'>{data.main.humidity.toFixed()}  %</p>:null}
           <p>Humidity</p>
         </div>
         <div className='speed'>
         {data.main ? <p className='bold'>{data.wind.speed} MPH </p>:null}
           <p>Wind Speed</p>
         </div>
         </div>      
       }  
     </div>
    </div>
  );
}

export default App;
