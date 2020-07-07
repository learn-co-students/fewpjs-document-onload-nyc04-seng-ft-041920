let text = document.querySelector("#text");

document.addEventListener("DOMContentLoaded", function() {
  //console.log("#text");
  updateDOM()
});

console.log(
  "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
  );

function updateDOM() {
  document.getElementById("text")
    .innerHTML = "This is really cool!";
}
