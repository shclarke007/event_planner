class EventCalendar {
  constructor(eventList = null) {
    this._eventList = [];
  }

  pushEvent(event) {
    this._eventList.push(event);
  }

  upComingEvents(){
    let upcoming = [];
    this._eventList.forEach((event) => {
      let now = new Date();
      let eventDate = event.getDateObject();
      if (eventDate > now) {
        upcoming.push(event);
      }
    });
    return upcoming;
  };

  displayEvent(){
    let div = document.createElement('div');
    this.upComingEvents().forEach((e)=>{
      let eventHTML = e.displayAnEvent();
      div.appendChild(eventHTML);
    })
    return div
  }
}
