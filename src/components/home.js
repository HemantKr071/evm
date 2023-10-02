import React from 'react'


const home = () => {
  return (
    <>
    
   <section className='body' >
  <div className="homeimg">
      <img alt='Image' src='https://firewireblog.com/wp-content/uploads/2021/02/photo-of-people-watching-a-concert-2747449.jpg'/>
     
        
    </div>
    <div className='herotext'>
     <h1>Connecting the world</h1>
     <h5>Easy to search, you just enter the keyword</h5>
    </div>

    <div className='virtual'>
      <h5><b>Virtual Event <span id='date'>July 29,2023</span></b></h5>
    </div>

    <div className='upevents'>
      <h1>Upcoming Events</h1>
      <h5>You can choose to display featured</h5>
      </div>
    <div className='imgbar'>
        
        <div className='imgbox'>
           <img alt='image' src='https://th.bing.com/th/id/OIP.YpgaYVxWjgYE9vxevVrKpgHaE8?pid=ImgDet&rs=1'/>
           <h4>RECURRING EVENT</h4>  
           <div className='lcn'>
           
             <h5>Monday,October 2,2023,1:30 am</h5>
             <h5>Sacramento,California</h5>
           </div>
           <div className='tkt'>
            <button className='tkt-btn'><b> GET TICKET</b> </button>
            <h5><b>$10.00 - $25.00</b></h5>
           </div>
        </div>

        <div className='imgbox'>
           <img alt='image' src='https://th.bing.com/th/id/OIP.oxAZ7Z_bKne5ooI6x_sMaAHaE8?pid=ImgDet&rs=1'/>
           <h4>FREE EVENT</h4>
           <div className='lcn'>
             <h5>Monday,October 2,2023,8:00 am</h5>
             <h5>Lakewood,Colorado</h5>
           </div>
           <div className='tkt'>
            <button className='tkt-btn'><b> GET TICKET</b> </button>
            <h5><b>$0.00 </b></h5>
           </div>
        </div>

        <div className='imgbox'>
           <img alt='image' src='https://www.jonesaroundtheworld.com/wp-content/uploads/2019/10/Music-Festivals-2020.jpg'/>
           <h4>AUTO SEAT</h4>
           <div className='lcn'>
             <h5>Monday,October 3,2023,8:00 am</h5>
             <h5>Pioche,Nevada</h5>
           </div>
           <div className='tkt'>
            <button className='tkt-btn'><b> GET TICKET</b> </button>
            <h5><b>$15.00 - $25.00</b></h5>
           </div>
        </div>

        


      </div>
    </section>
        
    
    </>
  )
}

export default home