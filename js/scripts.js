function myNeighbor(input) {
  let switchArray = [];
  for (let i = 0; i <= input.length; i++) {
    if (switchArray[i] === 3) {
      return "Bop!";
    } else if (switchArray[i] === 2) {
      return "Boop!";
    } else (switchArray[i] === 1) 
      return "Beep!";
    }

  }


//   function censorWord(string) {
//     let wordArray = string.split(" ");
  
//     for (let i = 0; i < wordArray.length; i++) {
//       if (wordArray[i] === "zoinks" || wordArray[i] === "muppeteer" || wordArray[i] === "biffaroni" || wordArray[i] === "loopdaloop") {
//         wordArray.splice(i, 1, "#@*$&",);
//       }
//     }
//     return wordArray.join(" ");
//   }
  
//   censorWord("zoinks");

function myNeighbor(input);
let swapArray = input.split(" ");

for (let i = 0; i <= input.length; i++) {
  if (swapArray[i] === 3 && swapArray[i] === 2 && swapArray[i] === 1) {
    return "Won't you be my neighbor";
  }
}