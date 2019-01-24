describe('EventDiary', function() {

  let eventCalendar = new EventDiary()
  let eventPlannerContent = "content"
  let eventPlannerDate = "21/11/2019"
  let eventPlanner = eventPlannerContent + ' ' + eventPlannerDate

  it('eventCalendar is an instance of Event Calendar class', function() {
    instanceOf(eventCalendar, EventDiary);
  });

  it('eventCalendar is able to show list of the events', function() {
    eventCalendar.pushEvent(eventPlanner)
    expectToEqual(eventPlanner, eventCalendar.displayEvent());
  }); //test to be revisited

});
