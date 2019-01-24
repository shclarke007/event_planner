describe('Event', function () {
  describe('#list', function() {
    var an_event = new Event();
    var diary = new EventDiary();
    an_event.createEvent('Workshop', '2020/01/01', '10:00');
    diary.saveEvent(an_event);
    can('read its content', function () {
      expect(an_event._content).toEq('Workshop')
    });
    can('read its date', function () {
      expect(an_event._date).toEq('2020/01/01')
    });
    can('read its time', function () {
      expect(an_event._time).toEq('10:00')
    });

  });
});
