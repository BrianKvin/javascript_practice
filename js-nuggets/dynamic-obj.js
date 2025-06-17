const state = {
  loading: true,
  name: 'Kelvin',
  job: 'Software Engineer',
  age: 30,
}

const dynamicObj = (key, value) => {
  state[key] = value;
  // return state;
}

console.log(state)

updateValue = dynamicObj('job', 'Data Scientist');
// console.log(updateValue);
console.log(state);
