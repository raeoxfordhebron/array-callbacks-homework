const minions = [
    "bob",
    "kevin",
    "stuart",
    "dave",
    "jerry",
    "mark",
    "tim",
    "phil",
    "carl",
  ]

// forEach
// First, he wants to test out forEach to check who's present. So as he goes down the array of minions, they should console.log that they're here.  

const forEachMinion = (arr) => {
  arr.forEach((element, index) => {
    console.log(element)
  })
}

// forEachMinion(minions)

// Map
// Using the map method, capitalize each minion's name except Kevin's because he was being sneaky and save it to a new array called capitalizedMinions

const capitalizedMinions = minions.map((element, index) => {
    if(element !== 'kevin'){
      let splitName = element.split("")
      let capitalizeLetter = splitName[0].toUpperCase()
      splitName.splice(0, 1, capitalizeLetter)
      let joinNames = splitName.join("")
      return joinNames
    } else {
      return element
    } 
  }); console.log(capitalizedMinions)




// Use filter to filter out minions that are not capitalized and save the correctly capitalized minions to an array called actuallyCapitalizedMinions

const actuallyCapitalizedMinions = capitalizedMinions.filter((minion, index) => {
  let characters = minion.split("")
  return characters[0] === characters[0].toUpperCase()
})

console.log(actuallyCapitalizedMinions)

// Use every again, but this time on your new actuallyCapitalizedMinions array, to check if they're all capitalized now


const isCapitalized = actuallyCapitalizedMinions.every((minion, index) => {
  let characters = minion.split("")
  return characters[0] === characters[0].toUpperCase()
})

console.log(isCapitalized)


// Using find, find which minion is not correctly capitalized in the original capitalizedMinions array and save it to a variable called uncapitalizedMinion, then console log it

const uncapitalizedMinion = capitalizedMinions.find((element, index) => {
  let characters = element.split("")
  return characters[0] === characters[0].toLowerCase()
})

console.log(uncapitalizedMinion)

// Using findIndex, find what index kevin is in the original capitalizedMinionsarray

const indexMinion = capitalizedMinions.findIndex((element, index) => {
  return element === 'kevin'
})

console.log(indexMinion)

// Now that he's found him, he can just use capitalizedMinions[1]to select kevin and capitalize his name.

capitalizedMinions[1] = "Kevin"

// Once that's done, check again using everywhether or not capitalizedMinionsis all capitalized correctly

const isCapital = capitalizedMinions.every((element, index) => {
  let characters = element.split("")
  return characters[0] === characters[0].toUpperCase()
})

console.log(isCapital)

// First, using map create a separate array called minionNameLengths that maps out the minions' name lengths

const minionNameLengths = capitalizedMinions.map((element, index) => {
  return element.length
})

// Use reduce to sum up the minionNameLengths array

const reduceMinions = minionNameLengths.reduce((acc, element) => acc + element, 0)

console.log(reduceMinions)