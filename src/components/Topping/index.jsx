import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Topping = () => {
  const [data, setData] = useState([]);
  const [basket, setBasket] = useState([]);

  useEffect(() => {

    axios.get('http://localhost:3001/toppings')
      .then((res) => {
        // console.log(res)
        setData(res.data);
      })

  }, [])

  const handleChange=(e,item)=>{
    e.target.checked 
    ?setBasket([...basket , item])
    : setBasket(basket.filter((i)=>i.name !==item.name));



  }

  return (
    <div className='container'>

      <h1>Sos Çeşitleri</h1>
      <p>Tanesi <span className='text-success'>3₺</span></p>
      <h3>Sos Çeşitleri:{''} <span>{basket.length*3}</span> </h3>


      <div className='row gap-3 p-3'>
        {data.map((item ,i) => (
          <div 
          key={i}
          style={{width:'150px'}}
          className='col d-flex flex-column align-items-center py-4 rounded-5 top-card'>

            <label 
            className='d-flex flex-column align-items-center gap-3'
            htmlFor={item.name}>

              <img 
              height={100}
              src={item.imagePath} 
              alt="sos-resim" />

              <p className='text-center text-nowrap'>{item.name} </p>
              
            </label>
            
            <input
            onChange={(e)=>handleChange(e,item)}
            id={item.name}
            type="checkbox"
            
            />





          </div>



        ))}



      </div>





    </div>
  )
}

export default Topping