const customer = {
    name: {
      firstname: 'ivan',
      lastname: 'zoro',
    },
    age: 32,
    preferences: [
      {
      tech: ['cameras', 'smartwatches'],
      books: ['science fiction', 'coding'],
      },
     ],
  };
  
  const {name: {firstname, lastname}, age, preferences: [{ tech: [tech1, tech2], books: [books1, books2] }]} = customer;
  
  console.log(firstname, lastname, age)
  console.log(tech1, books2)
  
  const updatePreferences = {
    preferences: [{
      loca: [tech1, tech2],
      jodif: [books1, books2]},
    ],
  }
  
  const updatecustomer = {...customer, ...updatePreferences}
  
  console.log(updatecustomer)