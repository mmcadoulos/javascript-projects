//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.
class CrewCandidate {
  constructor(name, mass, scores) {
    this.name = name;
    this.mass = mass;
    this.scores = scores;
  }
  addScore(newScore) {
    this.scores.push(newScore);
  }

  average() {
    let addedScore = 0;
    let avgScore;
    for (let i = 0; i < this.scores.length; i++) {
      addedScore += this.scores[i];
    }
    //console.log(addedScore);
    avgScore = Math.round((addedScore / this.scores.length) * 10) / 10;
    return avgScore;
  }

  status() {
    let placement = "";
    if (this.average() >= 90) {
      placement = "Accepted";
    } else if (this.average() >= 80) {
      placement = "Reserve";
    } else if (this.average() >= 70) {
      placement = "Probationary";
    } else {
      placement = "Rejected";
    }

    return placement;
  }
}

let bBear = new CrewCandidate("Bubba Bear", 135, [88, 85, 90]);

//console.log(bBear);

let mMaltese = new CrewCandidate("Merry Maltese", 1.5, [93, 88, 97]);

//console.log(mMaltese);

let gGator = new CrewCandidate("Glad Gator", 225, [75, 78, 62]);

//console.log(gGator);

let mMic = new CrewCandidate("Micah McAdoo", 20000000, [0]);

//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.

// bBear.addScore(83);
// console.log(bBear);
// console.log(mMaltese.average());

console.log(
  `${
    bBear.name
  } earned an average test score of ${bBear.average()} and has a status of ${bBear.status()}.`
);

console.log(
  `${
    mMaltese.name
  } earned an average test score of ${mMaltese.average()} and has a status of ${mMaltese.status()}.`
);

console.log(
  `${
    gGator.name
  } earned an average test score of ${gGator.average()} and has a status of ${gGator.status()}.`
);

console.log(
  `${
    mMic.name
  } earned an average test score of ${mMic.average()} and has a status of ${mMic.status()}.`
);

//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.

while (gGator.average() <= 90){
    gGator.addScore(100);
    console.log(gGator.average());
    console.log(gGator.status());
}
