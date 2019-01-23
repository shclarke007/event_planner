describe('EventCalendar', function() {

  let eventCalendar = new EventCalendar()
  let eventPlannerContent = "content"
  let eventPlannerDate = "21/11/2019"
  let eventPlanner = eventPlannerContent + ' ' + eventPlannerDate

  it('eventCalendar is an instance of Event Calendar class', function() {
    instanceOf(eventCalendar, EventCalendar);
  });

  it('eventCalendar is able to show list of the events', function() {
    eventCalendar.pushEvent(eventPlanner)
    expectToEqual(eventPlanner, eventCalendar.displayEvent());
  }); //test to be revisited

});
