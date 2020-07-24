// const square = function (x) {
//   return x * x;
// }

// const square = (x) => {
//   return x * x;
// }


// const square = (x) => x * x;

// console.log(square(3));

const events = {
  name: 'Birthday Party',
  guestList: ['Mark', 'Jen', 'Andrew'],
  printGuestList() {
    console.log('Guest list for ' + this.name);

    this.guestList.forEach((guest) => {
      console.log(guest + ' is attending ' + this.name);
    })
  },
}

events.printGuestList()
