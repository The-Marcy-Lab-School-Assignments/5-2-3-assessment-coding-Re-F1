class Phone {
constructor(phoneNumber, contacts = []) {
  this.phoneNumber = phoneNumber;
  this.contacts = contacts;
}
addContact(contactInfo){
  if(contactInfo.name === undefined|| contactInfo.phoneNumber === undefined|| contactInfo.phoneNumber.length !== 10) {
    return 'Invalid'
  } 
    this.contacts.push(contactInfo)
    return `${contactInfo.name} added.`
}


removeContact(contactName) {
//   if (index > -1) { 
//     this.contacts.splice(index, 1);
//     console.log(`${name} removed.`);
// } else {
//     console.log('Contact not found');
//     return undefined;
// method removes the name from the student array
  const index = this.contacts.findIndex(contact => contact.name === contactName);
  if (index !== -1){
  this.contacts.splice(index, 1); //finds the index of the student array, removes using the splice method
  return `${contactName} removed.`
  } else {
    return "Contact not found."
  }
}


makeCall(contactInfo){
  return

}
}

class AppleIPhone extends Phone{
  constructor(phoneNumber, contacts){
  }
  super(phoneNumber, name){

  }
  sendImessage() {

  }
}

module.exports = {
  Phone,
  AppleIPhone,
};
