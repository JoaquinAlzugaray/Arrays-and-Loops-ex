let parking_state = [
  [1,1,1],
  [0,0,0],
  [1,1,2]
]

function getParkingLotState(array) {
  let arr =  {
    availableSlots: 0,
    occupiedSlots: 0,
    totalSlots: 0
  }

for (i = 0; i < parking_state.length; i++) {
  for (j = 0; j < parking_state[i].length; j++) {
    if (parking_state[i][j] == 1) {
       arr.occupiedSlots += 1
       arr.totalSlots += 1
     }
     else if (parking_state[i][j] == 2) {
     arr.availableSlots += 1
     arr.totalSlots += 1
     }
  }
} 
return arr
}


console.log(getParkingLotState(parking_state))

// {"availableSlots": 1, "occupiedSlots": 5, "totalSlots": 6}