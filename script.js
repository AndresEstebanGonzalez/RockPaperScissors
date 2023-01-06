const play = document.getElementById("play");
const main = document.getElementById("main");
let rockIcon = document.getElementById("rockIcon");
let paperIcon = document.getElementById("paperIcon");
let scissorIcon = document.getElementById("scissorIcon");
let gnarlyIcon = document.getElementById("gnarlyIcon");

// Play & Main default state
play.style.display = "flex";
main.style.display = "none";

//Enter PLAY mode
play.addEventListener("click", () => {
  play.style.display = "none";
  main.style.display = "flex";
});

//Hand object
let rock = {
  active: true,
  win: "scissor",
  emoji: "🗿",
};

let paper = {
  active: true,
  win: "rock",
  emoji: "📄",
};

let scissor = {
  active: true,
  win: "paper",
  emoji: "✂️",
};

let hand = [rock, paper, scissor];

//Random hand
function handIndex() {
  let randomIndex = Math.floor(Math.random() * 3);
  return hand[randomIndex];
}

// Hand events
rockIcon.addEventListener("click", () => {
  const ROCK_HAND = {
    rock: "TIE",
    paper: "YOU LOSE",
    scissor: "YOU WIN",
  };
  const rockResult = ROCK_HAND[handIndex().win];
  console.log(rockResult);
});

paperIcon.addEventListener("click", () => {
  const PAPER_HAND = {
    rock: "YOU WIN",
    paper: "TIE",
    scissor: "YOU LOSE",
  };
  const paperResult = PAPER_HAND[handIndex().win];
  console.log(paperResult);
});

scissorIcon.addEventListener("click", () => {
  const SCISSOR_HAND = {
    rock: "YOU LOSE",
    paper: "YOU WIN",
    scissor: "TIE",
  };
  const scissorResult = SCISSOR_HAND[handIndex().win];
  console.log(scissorResult);
});
