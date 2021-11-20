function myNeighbor(input);
let swapArray = input.split(" ");

for (let i = 0; i <= input.length; i++) {
  if (swapArray[i] === 3 && swapArray[i] === 2 && swapArray[i] === 1) {
    return "Won't you be my neighbor";
  }
}