import { Share } from '@mui/icons-material'
import img from '../../../assets/resultimg.jpg'
import img1 from '../../../assets/img1.jpg'
import img2 from '../../../assets/img2.jpg'
import img3 from '../../../assets/img3.jpg'
import img4 from '../../../assets/img4.jpg'
import React from 'react'

const InfoSpecific = () => {
  return (
    <div className='infoSpecific'>

      <div className="infoSpecific__Card">

        <div className="infoSpecific__Card--galeri">

          <img src={img1} alt="img" style={{objectFit:'cover', width:'190px'}}/>
          <img src={img2} alt="img" style={{objectFit:'cover', width:'209px'}}/>
          <img src={img3} alt="img" style={{objectFit:'cover', width:'109px'}}/>
          <img src={img4} alt="img" style={{objectFit:'cover', width:'289px'}}/>

        </div>

        <div className="infoSpecific__Card--title">
          <h1>Linus Torvalds</h1> <span><Share /> </span>
        </div>

        <hr style={{width:'100%', color:'#3c4043 !important'}} />

        <p className='infoSpecific__Card--text'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum ab esse nostrum vitae odit, aut itaque impedit dicta. Exercitationem officiis modi hic ad id praesentium aliquid rerum quas qui dicta repellat accusamus nam dolorem animi, nemo quis minus molestias odit voluptatibus quam! Non nisi, adipisci quisquam itaque nemo maiores mollitia.</p>

        <p className='infoSpecific__Card--text'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum ab esse nostrum vitae odit, aut itaque impedit dicta. Exercitationem officiis modi hic ad id praesentium aliquid rerum quas qui dicta repellat accusamus nam dolorem animi, nemo quis minus molestias odit voluptatibus quam! Non nisi, adipisci quisquam itaque nemo maiores mollitia.</p>

        
        <div className="infoSpecific__Card--picture">
        <h3>Otras personas tambien buscan</h3>
        
        <div className="infoSpecific__Card--picture--gallery">

          <div className="other">
            <img src={img} alt="result"/>
            <a href="#">other result</a>
          </div>

          <div className="other">
            <img src={img} alt="result"/>
            <a href="#">other result</a>
          </div>

          <div className="other">
            <img src={img} alt="result"/>
            <a href="#">other result</a>
          </div>

          <div className="other">
            <img src={img} alt="result"/>
            <a href="#">other result</a>
          </div>

        </div>

        </div>

      </div>

    </div>
  )
}

export default InfoSpecific