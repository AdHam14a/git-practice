let persons = [
  {
    name: "John",
    age: 30,
    city: "New York",
  },
  {
    name: "Mohamed",
    age: 20,
    city: "LA",
  },
];

console.log(persons);

filtered = persons.filter((p) => p.age > 25);

console.log(filtered);