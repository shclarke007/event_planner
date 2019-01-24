class EventDiary {
  constructor(eventList = null) {
    this._eventList = [];
  }

  saveEvent(event) {
    this._eventList.push(event);
  }

  sortedUpcomingEvents(){
    let sortedList = this.upcomingEvents()
    sortedList.sort((event1,event2) =>{
      return event1.getDateObject() - event2.getDateObject();
    });
    return sortedList;
  }

  upcomingEvents(){
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
    this.sortedUpcomingEvents().forEach((e)=>{
      let eventHTML = e.displayAnEvent();
      div.appendChild(eventHTML);
    })
    return div
  }
}
