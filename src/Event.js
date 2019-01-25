class Event {

  createEvent(content, date, time){
    this._content = content || null
    this._date = date || null
    this._time = time || null
  }

  displayAnEvent(){
    let div = document.createElement('div')
    div.innerText = `Event: ${this._content}` + "\n" +
    `Date: ${this._date}` + "\n" + `Time: ${this._time}`
    return div;
  }

  getDateObject() {
    return Date.parse(this._date);
  }

  getContent() {
    return this._content;
  }

  getDate() {
    return this._date;
  }

  getTime(){
    return this._time
  }
}
