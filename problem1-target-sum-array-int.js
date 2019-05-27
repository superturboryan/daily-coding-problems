// This problem was recently asked by Google.

// Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

// For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

// Bonus: Can you do this in one pass?

const targetSumArrayInt = (input, target) => {

   let possibleSums = []

   input.forEach((num, index) => {

      let newArr = input.slice(0, index).concat(input.slice(index + 1, input.length))

      newArr.forEach(addition => {

         const sum = num + addition
         possibleSums.push(sum)
      })
   })

   if (possibleSums.includes(target)) {
      return true
   }
   return false
}

console.log(targetSumArrayInt([10, 15, 3, 7], 17))
//Should return true