describe('Event Diary', ()=>{
  describe('#create', ()=>{
    let diary = new EventDiary()
    can('create an empty diary',()=>{
      expect(diary._eventList.length).toEq(0)
    });
  })
  describe('#add',()=>{
    let _event = new Event()
    let _diary = new EventDiary()
    _event.createEvent('JS', '2019-12-12', '10:00')
    _diary.saveEvent(_event)
    can('add an event to the diary',()=>{
      expect(_diary._eventList.length).toEq(1)
    });
  });
  describe('#upcoming', ()=>{
    let event1 = new Event()
    let event2 = new Event()
    let diary1 = new EventDiary()
    event1.createEvent('JS', '2019-10-10', '10:00')
    event2.createEvent('Ruby', '2018-10-10', '10:00')
    diary1.saveEvent(event1)
    diary1.saveEvent(event2)
    can('return only upcoming events',()=>{
      expect(diary1._eventList[0]._content).toEq('JS')
      expect(diary1._eventList[0]._date).toEq('2019-10-10')
      expect(diary1._eventList[0]._time).toEq('10:00')

      expect(diary1.upComingEvents().length).toEq(1)
    })

  });
});
