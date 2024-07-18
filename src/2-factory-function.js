const bankAccountFactory = (startingBalance = 0) => {
  let balance = startingBalance
  return {

checkBalance(){
      return balance
  },

add(amount){
   balance += amount
   console.log(`$${amount} added.`)
  },

subtract(amount){
  balance -= amount
  console.log(`$${amount} subtracted.`)
 },
  }
};

// const createCourse = (topic, instructor) => { // declaring createCourse - taking the parameters of topic & instructor
//   const students = [];
//   return { // returning an object containing : topic (which is user input; parameter), instructor (user input; parameter), students (empty array),
//     topic,
//     instructor,
    
//     addStudent(name) {
//       students.push(name);
//     },

//     removeStudent(name) { // method removes the name from the student array
//       const index = students.indexOf(name);
//       if (index > -1){
//       students.splice(index, 1); //finds the index of the student array, removes using the splice method
//       }
//     },

//     getStudents() { // 
//       return [...students];
//     }
//   }
// }
module.exports = {
  bankAccountFactory,
};
