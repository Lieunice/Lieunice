var factList = [
"Stress affects mental health negatively.", /*0*/
"Change is good, even if it's small, it is better to have something new.", /*1*/
"47.1 million of people in the U.S. or 19% are living with a mental health condition nationwide.", /*2*/
"The pandemic has caused anxiety and depression to increase by 25% globally.", /*3*/
"Depression is a leading cause of disability worldwide.", /*4*/
"Substance abuse is classified as a mental illness.", /*5*/
"Talking with people, especially in person, can improve your mental health (make sure that you enjoy talking with the person/group).", /*6*/
"Find something that you enjoy doing, or calms you down.", /*7*/
"Getting some decent sleep will improve your mental health.", /*8*/
"A mental illness will disrupt a person’s thinking, feeling, mood, and daily functioning.", /*9*/
];

console.log(factList [1]);

var fact = document.getElementById("fact");
var button = document.getElementById("button");
var count = 0;

button.addEventListener("click", displayFact);
function displayFact() {
  fact.innerHTML = factList[count];
  count++;
  if (count == 9) {
    count = 0;
  }
}
