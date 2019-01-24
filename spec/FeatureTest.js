describe('Feature Test', function() {

  let anevent = new Event()
  let eventDiary = new EventDiary()

  it('We can create an event and push it in a calendar', function() {
    eventCalendar.pushEvent(Event)
    expectToEqual(Event, eventCalendar.showEvents());
  });

});
