window.addEventListener('load', ()=> {

let diary = new EventDiary();
let button = document.getElementById('event_create_button')

button.addEventListener('click', ()=> {
  makeEvent();
});

//creates event & push to a calendar
function makeEvent() {
  let content = document.getElementById('user_input').value
  let date = document.getElementById('date_input').value
  let time = document.getElementById('time_input').value
  let event = new Event;
  event.createEvent(content, date, time);
  diary.saveEvent(event);
  displayEvent()
}

  const displayEvent = ()=> {
    let eventlistings = document.getElementById('eventlistings');
    events = diary.displayEvent();
    eventlistings.innerText = " ";
    eventlistings.appendChild(events);
  }

})
