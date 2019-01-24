window.addEventListener('load', ()=> {

let calendar = new EventDiary();
let button = document.getElementById('event_create_button')

button.addEventListener('click', ()=> {
  makeEvent();
});

//creates event & push to a calendar
function makeEvent() {
  let content = document.getElementById('user_input').value
  let datetime = document.getElementById('date_time').value
  let event = new Event(content, datetime);
  calendar.pushEvent(event);
  displayEvent()
}

  const displayEvent = ()=> {
    let eventlistings = document.getElementById('eventlistings');
    events = calendar.displayEvent();
    eventlistings.innerText = " ";
    eventlistings.appendChild(events);
  }

})
