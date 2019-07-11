// This problem was asked by Facebook.

// Given a array of numbers representing the stock prices of a company in chronological order, write a function that calculates the maximum profit you could have made from buying and selling that stock once.You must buy before you can sell it.

// For example, given[9, 11, 8, 5, 7, 10], you should return 5, since you could buy the stock at 5 dollars and sell it at 10 dollars.

const largestProfit = inputArray => {

   let largestProfit = 0;
   let runningProfit = 0;
   let currentValue = inputArray[0];

   for (let i = 1; i < inputArray.length; i++) {

      console.log("Current val: " + currentValue)
      console.log("Next val: " + inputArray[i])

      if (currentValue <= inputArray[i]) {
         let profit = inputArray[i] - currentValue
         runningProfit += profit
      }
      else {
         runningProfit = 0;
      }

      console.log("Profit: " + runningProfit)

      runningProfit > largestProfit ? largestProfit = runningProfit : null

      currentValue = inputArray[i]
   }

   return largestProfit;
}

let input = [1, 3, 2, 4, 6, 8, 9, 8, 11, 19]
console.log("The largest profit from the input array is: " + largestProfit(input))