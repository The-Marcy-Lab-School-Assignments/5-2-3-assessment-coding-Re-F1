const { getId } = require('./utils');

class ToDoItem {
constructor(description, priorityLevel, property) {
    this.id = getId();
    this.property = property
    this.description = description;
    this.priorityLevel = priorityLevel;
    this.isDone = false
}

  getPriorityLevel(){
    return `${this.priorityLevel}`
  }
}


class ToDoList {
  #items = []

  static #allItems = [];

  constructor(name, property, description) {
    this.property = property
    this.name = name;
    this.description = description
    this.id = getId();
    ToDoList.#allItems.push(this)
  }

  getDescription(){
    return this.description
  }

createItem(insertItem, num) {
 const addedItem = new ToDoItem(insertItem, num);
 this.#items.push(addedItem)
 return addedItem
}

getItems(){
  return [...this.#items]
}

getCompletedCount(){
  let complete = 0
  for(let i = 0; i < this.#items.length; i++){
    if (this.#items[i].isDone === true) {
      complete += 1
    }
  }
  return complete
}

static findBy(id) {
return this.#allItems.find((item) => item.id === id)
}

static list() {
return [...ToDoList.#allItems]
}


}
module.exports = {
  ToDoItem,
  ToDoList
};