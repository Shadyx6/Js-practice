let submit = document.querySelector('button')
let city = document.querySelector('.cityname')
const apiKey = 'eba8fec5175e40cd8b6f53c923a9a182'

function getcity(){

    submit.addEventListener('click', async event => {
        event.preventDefault()
        let cityname = document.querySelector('input').value
      if (cityname){
      try {
        console.log(cityname)
        city.textContent = cityname
        await getweather(cityname)
        
      } catch (error) {
        console.log('error')
      }}
    })
}
getcity()
async function getweather(data){
    try{
        const API = `https://api.weatherbit.io/v2.0/current?&city=${data}&key=${apiKey}&include=minutely`
        const getter = await fetch(API)
        const response = await getter.json()
        console.log(response)
    } catch(error)
    {
        console.log('server side error')
    }

}
