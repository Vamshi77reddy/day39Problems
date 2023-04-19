let number= [];
for(var i=0;i<10;i++){
    let num = Math.floor(Math.random()*999)
    number.push(num)
}
console.log("Before sorting")
console.log(number);
console.log("After sorting")
console.log(number.sort())

let largestNumber = 0;
let secondLargestNumber = 0;
let smallestNumber = number[9];
let secondSmallestNumber = number[0];
for(element of number){
  if(element>largestNumber){
    secondLargestNumber = largestNumber;
    largestNumber = element;
  }
  else if(element>secondLargestNumber && element != largestNumber){
    secondLargestNumber = element;
  }
    if(element<smallestNumber){
        secondSmallestNumber = smallestNumber;
        smallestNumber = element;
    }
    else if(element<secondSmallestNumber && element != smallestNumber){
        secondSmallestNumber = element;
    }
}
console.log("Largest element is => ",largestNumber);
console.log("Second largest element is => ",secondLargestNumber);
console.log("Smallest element is => ",smallestNumber);
console.log("Second smallest element is => ",secondSmallestNumber);
