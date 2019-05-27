// This problem was asked by Uber.

// Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.

// For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be [2, 3, 6].

// Follow-up: what if you can't use division?

const prodArray = input => {

   if (typeof input !== "object") {
      console.log("Input must be an ARRAY of INTEGERS")
   }

   let output = []

   input.forEach((num, index) => {
      let newNum = 1
      let newArr = []
      if (index === 0) {
         newArr = input.slice(1)
      }
      else {
         newArr = input.slice(0, index).concat(input.slice(index + 1, input.length))
      }

      newArr.forEach(multiplyBy => {

         newNum *= multiplyBy
      })

      output.push(newNum)
   })

   return output
}

console.log(prodArray([3, 2, 1]))

//Expecting [120,60,40,30,24]