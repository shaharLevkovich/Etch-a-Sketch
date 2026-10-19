const container = document.querySelector("#container");

let userNumber = prompt("Please enter number of squares (less then 100)");

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

if(userNumber < 100){
    const numberOfSquares = userNumber * userNumber;
    const squareInLine = 1 + +userNumber;
    for(let i = 0 ; i < numberOfSquares ; i++)
    {
        const square = document.createElement("div");
        square.style.border = "2px solid black";
        square.style.width = `calc(100% / ${squareInLine})`;
        square.style.aspectRatio = "1";
        container.appendChild(square);

        //it means that every square is getting an event listener
        square.addEventListener("mouseenter", () => {
            const r = getRandomInt(256);
            const g = getRandomInt(256);
            const b = getRandomInt(256);
            square.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
            //square.style.backgroundColor = "pink";
        });
    }
}
else{
    alert(`Error: ${userNumber} is too high! The maximum allowed is 100.`);
}



