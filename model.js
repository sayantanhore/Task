export default class Model {
  constructor(type){
    this.type = type;
  }
  insert (item) {
    if (!this.data) {
      this.data = [];
    }
    if (this.data.length > 0) {
      let present = true;
      this.data.forEach(function(element) {
        if (element.id !== item.id) {
          present = false;
        } else {
          present = true;
          return;
        }
      });
      if (!present) {
        this.data.push(item);
      }
    } else {
      this.data.push(item);
    }
  }
  remove (item) {
    if (!this.data) {
      return;
    }
    if (this.data.length > 0) {
      let dataChanged = this.data.filter((element) => {
        if (element.id !== item.id) {
          return true;
        }
      });
      this.data = dataChanged;
    }
  }
  replaceAt(index, item) {
    this.data.splice(index, 1, itemToComplete);
  }
  get () {
    return this.data;
  }
}
