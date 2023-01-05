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
play.addEventListener("click", () => {
  play.style.display = "none";
  main.style.display = "flex";
});

// Hand events

rock.addEventListener("click", () => {
  const ROCK_HAND = {
    rock: "TIE",
    paper: "YOU LOSE",
    scissor: "YOU WIN",
  };
  const rockResult = ROCK_HAND[handIndex().win];
  console.log(rockResult);
});

paper.addEventListener("click", () => {
  const PAPER_HAND = {
    rock: "YOU WIN",
    paper: "TIE",
    scissor: "YOU LOSE",
  };
  const paperResult = PAPER_HAND[handIndex().win];
  console.log(paperResult);
});

scissor.addEventListener("click", () => {
  const SCISSOR_HAND = {
    rock: "YOU LOSE",
    paper: "YOU WIN",
    scissor: "TIE",
  };
  const scissorResult = SCISSOR_HAND[handIndex().win];
  console.log(scissorResult);
});

//Hand object
const hand = [
  (rock = {
    active: true,
    win: "scissor",
    emoji: "🗿",
  }),
  (paper = {
    active: true,
    win: "rock",
    emoji: "📄",
  }),
  (scissor = {
    active: true,
    win: "paper",
    emoji: "✂️",
  }),
];

//Random hand
function handIndex() {
  let randomIndex = Math.floor(Math.random() * 3);
  return hand[randomIndex];
}
