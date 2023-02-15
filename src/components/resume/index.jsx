import './styles.css'

const Resume = ({resume}) => {
  const {sign, mood, luckyNumber, description, currentDate} = resume

  return (
    <div className="resume">
      <h1>{sign}</h1>
      <p>{currentDate}</p>
      <h2>{mood}</h2>
      <p>{description}</p>

    </div>
  )
}

export default Resume