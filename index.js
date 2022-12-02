// Code your solution here
/*findMatching- This function takes an array of drivers' names and a string as arguments, and returns the matching list of drivers. The function should be case insensitive.*/
const findMatching = function(arrayOfDNames, string) {
   return arrayOfDNames.filter( (name) =>  name.toUpperCase() === string.toUpperCase() );
}


/*fuzzyMatch - This function takes an array of drivers' names and a string as arguments for querying the array, and returns all drivers whose names begin with the provided letters.*/
const fuzzyMatch = function(arrayOfDNames, string) {
    return arrayOfDNames.filter( (name) => name.charAt(0) === string.charAt(0) );
}



/*matchName - This function takes an array of driver objects and a string as arguments. Each driver object has two properties: name and hometown. The function should return each element whose name property matches the provided string argument.*/
const matchName = function(arrayofDObjects, string) {
    return arrayofDObjects.filter( (obj) => obj.name === string );
}
const drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];
console.log(matchName(drivers, "Bobby"))