export interface Person {
  first: string;
  last: string;
  address: {
    city: string;
    country: string;
  };
}

const max: Person = {
  first: 'Max',
  last: 'Mustermann',
  address: {
    city: 'Berlin',
    country: 'Deutschland',
  },
};

function marry(person: Person, last: string, city: string): Person {
  return {
    ...person,
    last,
    address: {
      ...person.address,
      city,
    },
  };
}

const marriedMax = marry(max, 'Musterfrau', 'Hannover');

function hasChanged(prevPerson: Person, currPerson: Person): boolean {
  return (
    // n:= #nodes + #leafes -> O(n)
    // Is this possible within O(1)?
    prevPerson !== currPerson
    // prevPerson.first !== currPerson.first ||
    // prevPerson.last !== currPerson.last ||
    // prevPerson.address !== currPerson.address ||
    // prevPerson.address.city !== currPerson.address.city ||
    // prevPerson.address.country !== currPerson.address.country
  );
}
