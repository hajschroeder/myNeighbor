function myNeighbor(string){
  let thisArray = string.split("");
  for (let i=0; i < thisArray.length; i++) {
    if (thisArray[i] === "1") {
      thisArray.splice(i, 1, "Beep!",);
    }
  }
  return  thisArray.join(" ");
}

myNeighbor(1);


