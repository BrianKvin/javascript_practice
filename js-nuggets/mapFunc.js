const people = [
  { name: 'Alice', age: 30, career: 'Teaching' },
  { name: 'Bob', age: 25, career: 'Engineering' },
  { name: 'Charlie', age: 35, career: 'Design' },
  { name: 'Diana', age: 28, career: 'Marketing' },
  { name: 'Ethan', age: 40, career: 'Management' }   
];

const professions = people.map((person) => {
  return {career: person.career};
});

console.log(professions);
