var students = [
  {
   name: 'Derek',
   age: 25,
   city: 'Boulder'
  },
  {
   name: 'Liz',
   age: 28,
   city: 'Denver'
  },
  {
   name: 'Carl',
   age: 31,
   city: 'Boulder'
  },
  {
   name: 'Peter',
   age: 23,
   city: 'Boulder'
  },
  {
   name: 'Megan',
   age: 19,
   city: 'Denver'
  }
];


function problem1(){
  students.forEach(function(student){
    console.log(student.age);
  });
}

function problem2(){
  students.forEach(function(student){
    console.log(student.name+", "+student.city);
  });
}

function problem3(){
  students.forEach(function(student){
    if(student.city=='Boulder'){
      console.log(student.name+" is from "+student.city);
    }
  });
}

function problem4(){
  students.forEach(function(student){
    if(student.age>25){
      console.log(student.name+" is older than 25");
    }
  });
}

// problem1();
// problem2();
// problem3();
problem4();


