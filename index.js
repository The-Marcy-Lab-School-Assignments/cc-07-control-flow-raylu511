//1
function sumOfFourAndSix(){
    let sum=0;
  for(let i=1; i<=1000; i++){
      if(i%4===0 && i%6===0) {
          sum+=i;
      }
  }
  return sum;
}

//2
function oddAndEvenInFifteen(){
  for(let i=0 ; i<=15; i++){
      if(i%2===0){
          console.log(`${i} is even`);
      }
      else{
          console.log(`${i} is odd`);
      }
  }
}

//3
function assignGrade(grade){
  if(grade<65){
      return 'F';
  }
  else if(grade<=70){
      return 'D';
  }
  else if(grade<=80){
      return 'C';
  }
  else if(grade<=90){
      return 'B';
  }
  else{
      return 'A';
  }
  
  
}

// console.log(sumOfFourAndSix());  //41832
// oddAndEvenInFifteen();

// console.log(assignGrade(91)) // returns "A"
// console.log(assignGrade(65))  // returns "D"
// console.log(assignGrade(80))  // returns "c"



