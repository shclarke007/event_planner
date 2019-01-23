class EventPlanner {
  constructor(content, date) {
    this._content = content || null
    this._date = date || null
  }

  displayAnEvent(){
    let div = document.createElement('div')
    div.innerText = `${this._content} happening on: ${this._date}`
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
}
