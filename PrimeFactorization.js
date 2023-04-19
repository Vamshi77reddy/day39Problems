let array = []
let a = 130;
for (let i = 2; i < a; i++) {
    while( a%i == 0){
      console.log(i," ");
    array.push(i)
      a = a/i ;
    }
}
  if(a>=2){
    console.log(a);
    array.push(a)
  }

console.log(array);