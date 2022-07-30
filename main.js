// Your Code Here!

// Create a function that "rolls a die" and give you a number 1-6.
let count = [
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
];
let totalNumberOfDiceRolls = 0;

function onClick() {
  // Do that 1000 times and create an array of how frequently each result occurrs.
  for (let i = 0; i < 20; i++) {
    let result = times2();
    count[result - 2] = count[result - 2] + 1;
    totalNumberOfDiceRolls++;
  }

  //displaying the frequency of each result
  for (let i = 0; i < count.length; i++) {
    let output = "I rolled: " + (i + 2) + " this many times: " + count[i];

    //preventing the results from running off the screen by grabbing the element
    //if it already exists
    let divOutput = document.getElementById(i);
    if (!divOutput) {
      divOutput = document.createElement("div");
      divOutput.setAttribute("id", i);
      document.body.append(divOutput);
    }
    divOutput.innerHTML = output;

    //created a graph from https://www.w3schools.com/howto/howto_css_skill_bar.asp
    barGraph((count[i] / totalNumberOfDiceRolls) * 100, i);
  }
}

function reset() {
  count = [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ];
  totalNumberOfDiceRolls = 0;
  for (let i = 0; i < count.length; i++) {
    barGraph(0, i);
  }
}

function rollDie() {
  let x = Math.floor(Math.random() * 8 + 1);
  return x;
}

// Then roll two dice and add them together.
function times2() {
  let die1 = rollDie();
  let die2 = rollDie();
  return die1 + die2;
}

function barGraph(percent, id) {
  let divContainer = document.getElementById(id + "-container");
  //if container is not on the page, initialize
  if (!divContainer) {
    divContainer = document.createElement("div");
    divContainer.setAttribute("id", id + "-container");
    divContainer.className = "container";
    document.body.append(divContainer);
  }

  let divSkills = document.getElementById(id + "-skills");
  //if skills div is not on the page, initialize
  if (!divSkills) {
    divSkills = document.createElement("div");
    divSkills.setAttribute("id", id + "-skills");
    divSkills.className = "skills";
    divContainer.append(divSkills);
  }

  divSkills.style.backgroundColor =
    "#" + Math.floor(Math.random() * 16777215).toString(16);
  divSkills.style.width = percent + "%";
  divSkills.innerHTML = percent.toFixed(2) + "%";
  console.log(percent);
}
