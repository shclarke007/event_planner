describe('Event', function() {

  let eventPlanner = new Event()

  it('eventPlanner is an instance of Event Planner class', function() {
    instanceOf(eventPlanner, Event);
  });

  it('checks for content', function() {
    let Event2 = new Event('content')
    expectToEqual('content', eventPlanner2.getContent());
  });

  it('checks for the date', function() {
    let eventPlanner3 = new Event('content', '22/01/2019')
    expectToEqual('22/01/2019', eventPlanner3.getDate());
  });

});
