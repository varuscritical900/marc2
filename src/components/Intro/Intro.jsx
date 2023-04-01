import React from 'react'
import "./intro.css"
import FloatingDiv from '../FloatingDiv/FloatingDiv'
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';

const Intro = () => {
  const transition  = {duration : 2, type: 'spring'}
  return (
    <div className="intro container">
      <div className="i-left">
      <div className="i-name">
        <span>Hiya! I Am</span>
        <span>Marc James Montero</span>
        <span>From front-end finesse to back-end brilliance, I'm a full-stack developer <br/>ready to code my way to the top</span>
      </div>
      {/* <button className="button i-button">Hire me</button> */}
      <a href="https://drive.google.com/file/d/1uSuUOjLLXvBJCEZx2Z3cVRRPvW3IcS_l/view?usp=share_link" target="_blank" className='btn btn-warning w-50 text-light'>Hire me</a>
      <div className="i-icons">

        <a href="https://github.com/varuscritical900" target="_blank">
        <img src="https://firebasestorage.googleapis.com/v0/b/chat1-b013f.appspot.com/o/github.png?alt=media&token=396f4dd6-f94d-4792-97e3-952bd7d32896" alt="Github" />
        </a>

        <a href="https://www.linkedin.com/in/marc-james-montero-853119172/" target="_blank"><img src="https://firebasestorage.googleapis.com/v0/b/chat1-b013f.appspot.com/o/linkedin.png?alt=media&token=1ef2adb2-88e1-4739-9753-1711388a56a7" alt="LinkedIn" /></a>

        <a href="https://www.facebook.com/marcmontero07" target="_blank">
        <img src="https://firebasestorage.googleapis.com/v0/b/chat1-b013f.appspot.com/o/facebookyellow.png?alt=media&token=6eef4355-7742-4e2f-b538-43253e7b6de6" alt="Facebook" />
        </a>
      </div>

      </div>
      
      <div className='i-right'>
        <img src="https://firebasestorage.googleapis.com/v0/b/chat1-b013f.appspot.com/o/Vector1.png?alt=media&token=c91ddcb9-7b4c-4d8e-b76b-ff99a7d919e7" alt="" />
        <img src="https://firebasestorage.googleapis.com/v0/b/chat1-b013f.appspot.com/o/Vector2.png?alt=media&token=45024c8c-b879-4c81-b1e2-2d6b707382f1" alt="" />
        <img src="https://firebasestorage.googleapis.com/v0/b/chat1-b013f.appspot.com/o/ProfilePicture.jpg?alt=media&token=0e4cf914-50a1-49f4-ba7b-c73f2bfb745c" alt="" style={{width:250, height:350, borderRadius: 50, opacity:0.9}}/>
        
        <motion.img 
        initial={{ left: "-36%" }}
        whileInView={{ left: "-7%" }}
        transition={transition}
        src="https://firebasestorage.googleapis.com/v0/b/chat1-b013f.appspot.com/o/glassesimoji.png?alt=media&token=632ff2fd-dc6d-492d-ab5a-5630bc3f117b" alt="" />

        <motion.div  
            initial={{ top: "-4%", left: "74%" }}
            whileInView={{ left: "68%" }}
            transition={transition}
        className="floating-div"
        style={{top: '-4%', left: '68%'}}> 
          <FloatingDiv image="https://firebasestorage.googleapis.com/v0/b/chat1-b013f.appspot.com/o/crown.png?alt=media&token=63259bf4-2b17-4c07-9c33-12b1cc62a19c" txt1='Full-Stack' txt2='Developer'/>
        </motion.div>

        <motion.div 
        initial={{ left: "9rem", top: "18rem" }}
        whileInView={{ left: "0rem" }}
        transition={transition}
        className="floating-div"
        style={{top: '18rem', left: '0rem'}}> 
          <FloatingDiv image="https://firebasestorage.googleapis.com/v0/b/chat1-b013f.appspot.com/o/thumbup.png?alt=media&token=ed6b2406-393a-4aff-83c6-a62ca1dac595" txt1='Tech-savvy &' txt2='Solution-driven'/>
        </motion.div>

      </div>
    </div>
  )
}

export default Intro