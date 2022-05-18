import React from 'react'
import img from '../../../assets/resultimg.jpg'
import AccordionData from '../AccordionData/AccordionData'

const InfoAll = () => {
  return (
    <div className='infoAll'>

      <div className="infoAll__result">

        <div className="infoAll__result--text">
          <span>https://es.wikipedia.org/wiki/Linus_Torvalds</span>
          <a className='infoAll__result--text--title' href="#">
            Linus Torvalds - Wikipedia, la enciclopedia libre</a>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi aliquid eaque nulla dolorem similique quisquam, non id aut? Obcaecati deleniti blanditiis quod modi doloribus sed alias. Dolor enim dolorum cupiditate dicta doloribus harum fuga reprehenderit sed reiciendis voluptate magni suscipit culpa voluptatem nam accusamus, veniam tempore expedita quod facilis. Error!</p>
          <div className="moreInfo">
            <a href="#" style={{ marginRight: '10px' }}>Vida Privada</a>
            <a href="#" style={{ marginRight: '10px' }}>Controversias</a>
            <a href="#" style={{ marginRight: '10px' }}>Reconocimiento</a>
          </div>
        </div>

        <div className="infoAll__result--img">
          <img src={img} alt="result" />
        </div>

      </div>

      <AccordionData />

      <div className="infoAll__result">

        <div className="infoAll__result--text">
          <span>https://es.wikipedia.org/wiki/Linus_Torvalds</span>
          <a className='infoAll__result--text--title' href="#">RESULTADO BUSQUEDA</a>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi aliquid eaque nulla dolorem similique quisquam, non id aut? Obcaecati deleniti blanditiis quod modi doloribus sed alias. Dolor enim dolorum cupiditate dicta doloribus harum fuga reprehenderit sed reiciendis voluptate magni suscipit culpa voluptatem nam accusamus, veniam tempore expedita quod facilis. Error!</p>
          <div className="moreInfo">
            <a href="#" style={{ marginRight: '10px' }}>OPTION</a>
            <a href="#" style={{ marginRight: '10px' }}>OPTION</a>
            <a href="#" style={{ marginRight: '10px' }}>OPTION</a>
          </div>
        </div>

        <div className="infoAll__result--img">
          <img src={img} alt="result" />
        </div>

      </div>

    </div>
  )
}

export default InfoAll