import React from 'react' 


const Signup = () => {
  return (
    
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
           
             <h6>Monday,October 2,2023,1:30 am</h6>
             <h6>Sacramento,California</h6>
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
             <h6>Monday,October 2,2023,8:00 am</h6>
             <h6>Lakewood,Colorado</h6>
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
             <h6>Monday,October 3,2023,8:00 am</h6>
             <h6>Pioche,Nevada</h6>
           </div>
           <div className='tkt'>
            <button className='tkt-btn'><b> GET TICKET</b> </button>
            <h5><b>$15.00 - $25.00</b></h5>
           </div>
        </div>

        


      </div>
 

   
  <div className='card' >
    <div classNameName="row d-flex justify-content-center align-items-center h-100">
      <div classNameName="col-lg-12 col-xl-11">
        <div classNameName="card text-black">
          <div className="card-body p-md-5">
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                <form className="mx-1 mx-md-4">

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="text" id="form3Example1c" className="form-control" />
                      <label className="form-label" for="form3Example1c">Your Name</label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="email" id="form3Example3c" className="form-control" />
                      <label className="form-label" for="form3Example3c">Your Email</label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="password" id="form3Example4c" className="form-control" />
                      <label className="form-label" for="form3Example4c">Password</label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="password" id="form3Example4cd" className="form-control" />
                      <label className="form-label" for="form3Example4cd">Repeat your password</label>
                    </div>
                  </div>

                  <div className="form-check d-flex justify-content-center mb-5">
                    <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                    <label className="form-check-label" for="form2Example3">
                      I agree all statements in <a href="#!">Terms of service</a>
                    </label>
                  </div>

                  <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button type="button" className="btn btn-primary btn-lg">Register</button>
                  </div>

                </form>

              </div>
              <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                  className="img-fluid" alt="Sample image"/>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className='footer1'>
    <h1>Thanks For Visiting!!</h1>
  </div>
 
</section>
  )
}

export default Signup