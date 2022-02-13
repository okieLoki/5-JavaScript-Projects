/** @format */

//Challenge-1: Age in Days

function ageInDays() {
  var birthYear = prompt("What year were you born?");
  var ageDays = (2022 - birthYear) * 365;

  var h2 = document.createElement("h2");
  var textAnswer = document.createTextNode("You are " + ageDays + " days old");
  h2.setAttribute("id", "ageInDays");
  h2.appendChild(textAnswer);
  document.getElementById("flex-box-results").appendChild(h2);
}

function reset() {
  document.getElementById("ageInDays").remove();
}
