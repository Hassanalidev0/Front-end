import React from 'react'

const Sale = () => {
  return (
    
        <div className=' d-flex flex-lg-row flex-md-row flex-column justify-content-between  p-4 align-items-center' > 
        <div className='d-flex flex-lg-row flex-md-row flex-column gap-3 align-items-center'> 
        <h4 className='p-3' style={{backgroundColor:'black',color:'white',fontSize:20.8,fontWeight:'bold'}}>Big Sale</h4>
        <h4 style={{color:'white',fontSize:20,fontWeight:'bold'}}>ALL NEW FASHION BRANDS ITEMS UP TO 70% OFF</h4>
        <h6 style={{color: 'white',fontSize:14,fontWeight:'bold'}}>Online Purchases Only</h6>
        </div>
        <button className='btn btn-primary p-3' style={{fontSize:14,width:148,height:52,backgroundColor:'white',color:'black'}}>View Sale</button>
        </div>
   
  )
}

export default Sale