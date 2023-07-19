import React from 'react'

const Carousel = () => {
  return (
   <div className='container'>
    <div className='row'>
        <div className='col-12' style={{width:"100%", height:"auto"}}>
        <div>
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="/images/slide1.jpg" class="d-block w-100" alt="sldie 1"/>
    </div>
    <div class="carousel-item">
      <img src="/images/slide2.jpg" class="d-block w-100" alt="slide 2"/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>
        </div>
    </div>
   </div>
  )
}

export default Carousel