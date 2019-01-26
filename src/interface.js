window.onload = ()=> {

let key = config.MY_KEY
let diary = new EventDiary();
window.e = diary._eventList;
let button = document.getElementById('event_create_button')

button.addEventListener('click', ()=> {
  makeEvent();
});

let weather_button = document.getElementById('get_weather')

weather_button.addEventListener('click',()=>{
  let weather_div = document.getElementById('weather_display')
  let city = document.getElementById('city_input').value
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${key}`
  let request = new XMLHttpRequest();
  request.open('GET', url, true)
  request.onload = () => {
    let data = JSON.parse(request.response)
    weather_div.innerText = `Weather: ${data.weather[0].description}`
    + "\n" + `Temp: ${data.main.temp}`
  }
  request.send()
});


//creates event & push to an event diary
function makeEvent() {
  let content = document.getElementById('user_input').value
  let date = document.getElementById('date_input').value
  let time = document.getElementById('time_input').value
  let event = new Event;
  event.createEvent(content, date, time);
  diary.saveEvent(event);
  displayEvent()
}

//displays upcoming events in event diary
  const displayEvent = ()=> {
    let eventlistings = document.getElementById('eventlistings');
    events = diary.displayEvent();
    eventlistings.innerText = " ";
    eventlistings.appendChild(events);
  }

}
