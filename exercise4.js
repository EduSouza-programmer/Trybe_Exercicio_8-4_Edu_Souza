const assert = require('assert');

const people = [
  {
    name: 'Nicole',
    bornIn: 1992,
    nationality: 'Australian',
  },
  {
    name: 'Harry',
    bornIn: 2008,
    nationality: 'Australian',
  },
  {
    name: 'Toby',
    bornIn: 1901,
    nationality: 'Australian',
  },
  {
    name: 'Frida',
    bornIn: 1960,
    nationality: 'Dannish',
  },
  {
    name: 'Fernando',
    bornIn: 2001,
    nationality: 'Brazilian',
  },
];

// return todas as pessoas australianas
// nasceram no século 20
const filterPeople = (listPeople) => {
  return listPeople.filter(
    ({ bornIn, nationality }) =>
      bornIn >= 1901 && bornIn <= 2000 && nationality === 'Australian'
  );
};

const filteredPeople = filterPeople(people);

assert.deepEqual(filteredPeople[0], {
  name: 'Nicole',
  bornIn: 1992,
  nationality: 'Australian',
});

assert.deepEqual(filteredPeople[1], {
  name: 'Toby',
  bornIn: 1901,
  nationality: 'Australian',
});
