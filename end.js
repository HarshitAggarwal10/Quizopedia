// const username = document.getElementById("username");
// const saveScoreBtn = document.getElementById("saveScoreBtn");
// const finalScore = document.getElementById("finalScore");
// const mostRecentScore = localStorage.getItem("mostRecentScore");

// const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

// const MAX_HIGH_SCORES = 3;

// const error = document.getElementById("error");

// finalScore.innerText = mostRecentScore;

// let pattern = /\w+/g;



// saveHighScore = (e) => {
//   e.preventDefault();

//   const score = {
//     score: mostRecentScore,
//     name: username.value,
//   };

//   highScores.push(score);
//   highScores.sort((a, b) => b.score - a.score || a.name.localeCompare(b.name));
//   highScores.splice(MAX_HIGH_SCORES);

//   localStorage.setItem("highScores", JSON.stringify(highScores));
//   window.location.assign("index.html");
// };

const username = document.getElementById("username");
const saveScoreBtn = document.getElementById("saveScoreBtn");
const finalScore = document.getElementById("finalScore");
const mostRecentScore = localStorage.getItem("mostRecentScore");

const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

const MAX_HIGH_SCORES = 3;

const error = document.getElementById("error");

finalScore.innerText = mostRecentScore;

let pattern = /\w+/g;

function playAudio() {
  const audio = new Audio('quiz_over.mp3');
  audio.load(); // Ensure the audio is loaded
  audio.play();
}
playAudio();
saveHighScore = (e) => {
  e.preventDefault();
  
  const score = {
    score: mostRecentScore,
    name: username.value,
  };

  highScores.push(score);
  highScores.sort((a, b) => b.score - a.score || a.name.localeCompare(b.name));
  highScores.splice(MAX_HIGH_SCORES);

  localStorage.setItem("highScores", JSON.stringify(highScores));
  window.location.assign("index.html");
};
