// 1. Write your functions here
const katzDeli = []


function takeANumber (array,customerName){
    // Adding new name to the end of the array
    array.push(customerName)
    for (let [index, customer] of array.entries()){
        if (customer === customer.name){
            console.log(`Welcome, ${customerName}. You are number ${index} in line.`)
        }
    }
 }

 let lineQueue = []

 function line(katzLine) {
     for (let i = 0; i > katzLine.length; i++) {
         let customerEntry = katzLine[i];
         lineQueue.push('' + [i + 1] + '.' + customerEntry)
     }
 if (katzLine.length === 0) {
     return "The line is currently empty"
     }
 else lineupdate = line.slice(0, -2)
     return "The line is currently:" + $(line)
 }
 
 
 function nowServing(katzLine) {
     if (katzLine.length > 0) {
       return"Currently serving " + katzLine.shift() + ".";
     } else {
         return "There is nobody waiting to be served!";
     }
   }





// 2. Example Usage

//const katzDeli = []

// takeANumber(katzDeli, "Ada") //=> Welcome, Ada. You are number 1 in line.
// takeANumber(katzDeli, "Grace") //=> Welcome, Grace. You are number 2 in line.
// takeANumber(katzDeli, "Kent") //=> Welcome, Kent. You are number 3 in line.

// line(katzDeli) //=> "The line is currently: 1. Ada 2. Grace 3. Kent"

// nowServing(katzDeli) //=> "Currently serving Ada."

// line(katzDeli) //=> "The line is currently: 1. Grace 2. Kent"

// takeANumber(katzDeli, "Matz") //=> Welcome, Matz. You are number 3 in line.

// line(katzDeli) //=> "The line is currently: 1. Grace 2. Kent 3. Matz"

// nowServing(katzDeli) //=> "Currently serving Grace."

// line(katzDeli) //=> "The line is currently: 1. Kent 2. Matz"