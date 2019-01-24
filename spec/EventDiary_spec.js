describe('Event Diary', ()=>{
  let diary = new EventDiary()
  can('create an empty diary',()=>{
    expect(diary._eventList.length).toEq(0)
  })
})
