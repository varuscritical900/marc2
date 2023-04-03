import React, {useRef, useState} from 'react'
import emailjs from '@emailjs/browser';


const Contact = () => {
    const form = useRef();
    const[done, setDone]= useState(false);
    const sendEmail = (e) => {
        e.preventDefault();
        
    
        emailjs.sendForm("service_l07lj5o", "template_y47rose", form.current, "ISXdOAX4K7EIS7Agw")
          .then((result) => {
              console.log(result.text);
              setDone(true);
          }, (error) => {
              console.log(error.text);
          });
      };
  return (
    <div className='container d-flex flex-column-reverse flex-lg-row flex-md-column flex-sm-column-reverse mb-3'>
        {/* Contact */}
    <div className='container d-flex flex-column  mb-3 mt-5 '>
    <form ref={form} onSubmit={sendEmail} className='d-flex flex-column mb-3'>
    <label>Name</label>
    <input type="text" name="user_name" placeholder="Your name..." className="user w-100" required/>
    <label>Email</label>
    <input type="email" name="user_email" className='user w-100' placeholder="Your Email..." required/>
    <label>Message</label>
    <textarea name="message" className='w-100' placeholder="Your Message..." required/>
    <input type="submit" value="Send" className='btn btn-warning mt-3 mb-3 w-50'/>
    <span>{done && "I have received your message and will respond to you in a timely manner."}</span>
  </form>
  </div>

  {/* Carousel */}
  <div className=' mt-5 mb-3'>

  <div id="carouselExample" class="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
        <img src="https://firebasestorage.googleapis.com/v0/b/chat1-b013f.appspot.com/o/MeMicrosoft.jpg?alt=media&token=b093a049-f326-469b-802d-1c342255fbda"  className="d-block w-100 img-fluid" alt="" />
    </div>
    <div className="carousel-item">
      <img src="https://firebasestorage.googleapis.com/v0/b/chat1-b013f.appspot.com/o/Capstone%20Project.png?alt=media&token=e4d74a82-b25a-4500-a99a-1a790b1a13df"  className="d-block w-100" alt="" />
    </div>
    <div className="carousel-item">
      <img src="https://firebasestorage.googleapis.com/v0/b/chat1-b013f.appspot.com/o/Project%20Making.png?alt=media&token=9519147f-18b5-4d59-8cad-58fc4738b643"  className="d-block w-100" alt="" />
    </div>
    <div className="carousel-item">
      <img src="https://firebasestorage.googleapis.com/v0/b/chat1-b013f.appspot.com/o/montero%2C%20marc_5star.png?alt=media&token=92af11fd-8707-40ed-9769-9909f7c0354e"  className="d-block w-100" alt="" />
    </div>
    <div className="carousel-item">
      <img src="https://firebasestorage.googleapis.com/v0/b/chat1-b013f.appspot.com/o/montero%2C%20marc%20james_top.png?alt=media&token=a2dca9da-2445-4931-a72e-d20b0eb364f2"  className="d-block w-100" alt="" />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

  </div>
  </div>
  )
}

export default Contact