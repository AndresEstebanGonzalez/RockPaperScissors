const play = document.getElementById("play");
const main = document.getElementById("main");
let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissor = document.getElementById("scissor");
let gnarly = document.getElementById("gnarly");

// Play & Main default state
play.style.display = "flex";
main.style.display = "none";

//Enter PLAY mode
play.addEventListener("click", (e) => {
  play.style.display = "none";
  main.style.display = "flex";
});

// Hand events
rock.addEventListener("click", (e) => {
  if (handIndex().win === "rock") {
    console.log("TIE");
  } else if (handIndex().win === "paper") {
    console.log("YOU LOSE");
  } else if (handIndex().win === "scissor") {
    console.log("YOU WIN");
  }
});

paper.addEventListener("click", (e) => {
  if (handIndex().win === "paper") {
    console.log("TIE");
  } else if (handIndex().win === "scissor") {
    console.log("YOU LOSE");
  } else if (handIndex().win === "rock") {
    console.log("YOU WIN");
  }
});

scissor.addEventListener("click", (e) => {
  if (handIndex().win === "scissor") {
    console.log("TIE");
  } else if (handIndex().win === "rock") {
    console.log("YOU LOSE");
  } else if (handIndex().win === "paper") {
    console.log("YOU WIN");
  }
});

//Hand details
rock = {
  active: true,
  win: "scissor",
  emoji: "🗿",
};
paper = {
  active: true,
  win: "rock",
  emoji: "📄",
};
scissor = {
  active: true,
  win: "paper",
  emoji: "✂️",
};

const hand = [rock, paper, scissor];

//Random hand
function handIndex() {
  let randomIndex = Math.floor(Math.random() * 3);
  return hand[randomIndex];
}
