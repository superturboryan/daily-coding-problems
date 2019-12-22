// This problem was asked by Dropbox.
// Spreadsheets often use this alphabetical encoding for its columns: "A", "B", "C", ..., "AA", "AB", ..., "ZZ", "AAA", "AAB", ....
// Given a column number, return its alphabetical column id. For example, given 1, return "A". Given 27, return "AA".

let getSpreadsheetEncodingStringForColumn = col => {

   var count = col
   let base = 26

   var fullCycles = Math.floor(count / base)
   let partialCycle = count % base
   console.log("Full cycles: " + fullCycles + " \nLast letter: " + String.fromCharCode(64 + partialCycle))

   let labelLength = Math.ceil(Math.log(count) / Math.log(base))
   console.log("Label length: " + labelLength)

   var returnString = ""

   for (var i = labelLength - 1; i >= 0; i--) {

      var pow = Math.pow(base, i)

      var res = Math.floor(count / pow)

      var letter = String.fromCharCode(65 + res - 1)

      returnString += letter

      count -= res * pow
   }

   if (col == 1) return "A"

   return returnString
}

let answer = getSpreadsheetEncodingStringForColumn(135940859)
console.log(answer)
