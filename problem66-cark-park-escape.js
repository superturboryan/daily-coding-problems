// This problem was asked by Facebook.

// Task
// Your task is to escape from the carpark using only the staircases provided to reach the exit. You may not jump over the edge of the levels (you’re not Superman!) and the exit is always on the far right of the ground floor.
// Rules
// 1. You are passed the carpark data as an argument into the function.
// 2. Free carparking spaces are represented by a 0
// 3. Staircases are represented by a 1
// 4. Your parking place (start position) is represented by a 2
// 5. The exit is always the far right element of the ground floor.
// 6. You must use the staircases to go down a level.
// 7. You will never start on a staircase.
// 8. The start level may be any level of the car park.
// 9. Each floor will have only one staircase apart from the ground floor which will not have any staircases.
// Returns
// Return an array of the quickest route out of the carpark
// R1 = Move Right one parking space.
// L1 = Move Left one parking space.
// D1 = Move Down one level.
// Example
// carpark = [[1, 0, 0, 0, 2],
//            [0, 0, 0, 0, 0]];
// Working Out
// You start in the most far right position on level 1
// You have to move Left 4 places to reach the staircase => "L4"
// You then go down one flight of stairs => "D1"
// To escape you have to move Right 4 places => "R4"
// Result
// result = ["L4", "D1", "R4"]
// Good luck and enjoy!

const STAIRCASE = 1
const PERSON = 2

function escape(carpark) {

   let route = []

   if (carpark.length == 1) {
      for (spot in carpark[0]) {
         if (carpark[0][spot] === PERSON) {
            let num = carpark[0].length - 1 - spot

            if (!num) {
               return [];
            }

            route.push("R" + num)
         }
      }
      return route;
   }

   let height = carpark.length - 1

   console.log(height)

   let startFloor = 0;
   let found = false;

   let position;
   let stairAccum = 0;

   for (let i = 0; i <= height; i++) {

      //       console.log("Floor: " + carpark[i])

      //Find the starting floor for the escapee
      if (!found) {
         if (carpark[i].findIndex(checkPerson) == -1) {
            continue;
         }
         else if (!found) {
            startFloor = i
            found = true
         }
      }

      //Find his position on the starting floor and route to staircase
      if (i == startFloor) {

         position = carpark[i].findIndex(checkPerson)
         stairPos = carpark[i].findIndex(checkStairs);

         if (stairPos == -1) {

            //The exit will be on the ride side of the parking level, length - 1
            let exit = carpark[i].length - 1

            //Calculate distance to exit
            let difference = position - exit

            route.push("R" + Math.abs(difference))

            return route;

         }


         let difference = position - stairPos

         //If difference is less than 0 stairs are to the right
         if (difference < 0) {
            route.push("R" + Math.abs(difference))
         }
         else if (difference > 0) {
            route.push("L" + difference)
         }

         route.push("D")
         stairAccum = 1;
         //Set position to staircase once moved there
         position = stairPos
         continue;
      }

      //Find route from previous staircase
      if (i !== height && i > startFloor) {

         stairPos = carpark[i].findIndex(checkStairs);

         //Check if there's a staircase right below
         if (position === stairPos) {
            stairAccum++
            continue;
         }
         //If not add the accumalation of staircases to previous move 
         else if (stairAccum != 0) {
            route[route.length - 1] = "D" + stairAccum
            stairAccum = 0;
         }

         //Calculate distance to staircase
         let difference = position - stairPos

         //If difference is less than 0 stairs are to the right
         if (difference < 0) {
            route.push("R" + Math.abs(difference))
         }
         else if (difference > 0) {
            route.push("L" + difference)
         }
         //Go down after moving to staircase
         route.push("D")
         stairAccum++
         //Set position to staircase after going down a floor
         position = stairPos
         continue;
      }

      if (stairAccum != 0) {
         route[route.length - 1] = "D" + stairAccum
         stairAccum = 0;
      }

      //The exit will be on the ride side of the parking level, length - 1
      let exit = carpark[0].length - 1
      //Check if the escapee is at the exit, if so, he's escaped!
      if (position == exit) {
         return route;
      }
      //Calculate distance to exit
      let difference = position - exit

      route.push("R" + Math.abs(difference))


   }

   return route;
}

function checkPerson(spot) {
   return spot == PERSON
}

function checkStairs(spot) {
   return spot == STAIRCASE
}



let result = escape([[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]);

console.log("Escape route from lot: " + result);

//expected: ["R10"]


