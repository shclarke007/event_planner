describe('Event', function () {
  describe('#create', function() {
    var an_event = new Event();
    an_event.createEvent('Workshop', '2020/01/01', '10:00');
    can('know an event content', function () {
      expect(an_event.getContent()).toEq('Workshop')
    });
    can('know an event date', function () {
      expect(an_event.getDate()).toEq('2020/01/01')
    });
    can('know an event time', function () {
      expect(an_event.getTime()).toEq('10:00')
    });

  });
});
