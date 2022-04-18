// 1. Write your functions here
const katzDeli = []

function takeANumber (array,customerName){
    // Adding new name to the end of the array
    array.push(customerName)
  console.log(`Welcome, ${customerName}. You are number ${array.indexOf(customerName)+1} in line.`)

 }



function line (arra){
    // Adding new name to the end of the array
  let str = 'The line is currently: '

  if (arra.length>0) {
    for (let i = 1; i<=arra.length; i++) 
      {
        str = str + i +"."+arra[i-1]+" "
      }
  console.log(str)
  } else {
  console.log("The line is currently empty.")
  }
}



function nowServing (arra){
    // Adding new name to the end of the array
  if (arra.length>0) {
      console.log("Currently serving " + arra[(arra.length-1)] )
      arra.pop()
  } else {
  console.log("There is nobody waiting to be served!")
  }
}


//Testing the code
line(katzDeli)

takeANumber(katzDeli,'Wilson')
takeANumber(katzDeli,'Antony')
takeANumber(katzDeli,'Willian')

line(katzDeli)

nowServing(katzDeli)
line(katzDeli)



//console.log(katzDeli[0])
//console.log(katzDeli[1])
//console.log(katzDeli[2])

//delete katzDeli[0]
//console.log(katzDeli[0])
//console.log(katzDeli[1])
//console.log(katzDeli[2])





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