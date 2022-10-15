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

forEachMinion(minions)

// Map
// Using the map method, capitalize each minion's name except Kevin's because he was being sneaky and save it to a new array called capitalizedMinions

const mapEachMinion = (arr) => {
  let names = arr.map((element, index) => {
    if(element !== 'kevin'){
      let splitName = element.split("")
      let capitalizeLetter = splitName[0].toUpperCase()
      splitName.splice(0, 1, capitalizeLetter)
      let joinNames = splitName.join("")
    } else {
      return element
    } 
  }) 
  } 

