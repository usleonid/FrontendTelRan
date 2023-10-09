const persons = [];

addPerson.onclick = function() {
  const person = new Person(personId.value.trim(),
                            firstName.value.trim(),
                            lastName.value.trim(),
                            age.value);
  function predicate(item) {
    return item.id === person.id;
  }
  if (persons.findIndex(predicate) >= 0) {
    alert(`Person with id: ${person.id} exists`);
  } else {
    persons.push(person);
    const li = createInfoElement(`Id: ${person.id}, Name: ${person.firstName}, LastName: ${person.lastName}, Age: ${person.age}`, 'li');
    personsList.append(li);
    personId.value = firstName.value = lastName.value = age.value = '';
  }
}

calcStats.onclick = function() {
  const divStats = document.createElement('div');
  let age = persons.reduce((accum, p) => accum + p.age, 0) / persons.length;
  const h3avg = createInfoElement(`Average age: ${age}`, 'h3');
  age = persons.sort((a, b) => a.age - b.age)[0].age;
  const h3min = createInfoElement(`Min age: ${age}`, 'h3');
  age = persons.sort((a, b) => a.age - b.age)[persons.length - 1].age;
  const h3max = createInfoElement(`Max age: ${age}`, 'h3');
  divStats.append(h3avg, h3min, h3max);
  if (stats.firstElementChild.nextElementSibling) {
    stats.replaceChild(divStats, stats.firstElementChild.nextElementSibling);
  } else {
    stats.appendChild(divStats);
  }
}

function createInfoElement(content, tag) {
  const element = document.createElement(tag);
  const text = document.createTextNode(content);
  element.appendChild(text);
  return element;
}

function Person(id, firstName, lastName, age) {
  this.id = id;
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = +age;
}