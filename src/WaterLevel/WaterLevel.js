import React, { useState } from 'react'

function WaterLevel() {
    const [data,setData] = useState(null);
if(!data){

    setData([{"pot_id":1,"current_moisture_value":67,"createDateTime":78},{},{},{}])
}


  return (
    <div className='container-fluid'>
        <div className ='WaterLevel'>
            <div className ='WaterLevel__title'>

            </div>
            <div className='WaterLevel__table'>

            </div>

        </div>
    </div>
  )
}

export default WaterLevel