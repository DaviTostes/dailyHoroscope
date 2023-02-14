import './styles.css'

import { TbZodiacAquarius, TbZodiacAries, TbZodiacCancer, TbZodiacCapricorn, TbZodiacGemini, TbZodiacLeo,
  TbZodiacLibra, TbZodiacPisces, TbZodiacSagittarius, TbZodiacScorpio, TbZodiacTaurus, TbZodiacVirgo } from 'react-icons/tb'

const Signs = ({handleCallApi}) => {

  return(
    <div className="signs-wrapper">

      <div className="sign-wrapper">
        <button onClick={() => handleCallApi('aquarius')}><TbZodiacAquarius /></button>
        <p>Aquarius</p>
      </div>

      <div className="sign-wrapper">
        <button onClick={() => handleCallApi('aries')}><TbZodiacAries /></button>
        <p>Aries</p>
      </div>

      <div className="sign-wrapper">
        <button onClick={() => handleCallApi('cancer')}><TbZodiacCancer /></button>
        <p>Cancer</p>
      </div>

      <div className="sign-wrapper">
        <button onClick={() => handleCallApi('capricorn')}><TbZodiacCapricorn /></button>
        <p>Capricorn</p>
      </div>

      <div className="sign-wrapper">
        <button onClick={() => handleCallApi('gemini')}><TbZodiacGemini /></button>
        <p>Gemini</p>
      </div>

      <div className="sign-wrapper">
        <button onClick={() => handleCallApi('leo')}><TbZodiacLeo /></button>
        <p>Leo</p>
      </div>

      <div className="sign-wrapper">
        <button onClick={() => handleCallApi('libra')}><TbZodiacLibra /></button>
        <p>Libra</p>
      </div>

      <div className="sign-wrapper">
        <button onClick={() => handleCallApi('pisces')}><TbZodiacPisces /></button>
        <p>Pisces</p>
      </div>

      <div className="sign-wrapper">
        <button onClick={() => handleCallApi('sagittarius')}><TbZodiacSagittarius /></button>
        <p>Sagittarius</p>
      </div>

      <div className="sign-wrapper">
        <button onClick={() => handleCallApi('scorpio')}><TbZodiacScorpio /></button>
        <p>Scorpio</p>
      </div>

      <div className="sign-wrapper">
        <button onClick={() => handleCallApi('taurus')}><TbZodiacTaurus /></button>
        <p>Taurus</p>
      </div>

      <div className="sign-wrapper">
        <button onClick={() => handleCallApi('virgo')}><TbZodiacVirgo /></button>
        <p>Virgo</p>
      </div>
    </div>
  )
}

export default Signs