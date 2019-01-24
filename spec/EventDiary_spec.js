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
});
