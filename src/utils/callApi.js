import axios from 'axios';

const callback = async (sign) => {
  const response = await  axios.post(`https://aztro.sameerkumar.website/?sign=${sign}&day=today`)
  return (
    {
      sign: sign,
      mood: response.data.mood,
      luckyNumber: response.data.lucky_number,
      description: response.data.description,
      currentDate: response.data.current_date
    }
  )
}

export default callback