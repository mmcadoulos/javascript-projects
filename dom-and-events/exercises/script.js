function init() {
  const missionAbort = document.getElementById("abortMission");
  const button = document.getElementById("liftoffButton");
  const paragraph = document.getElementById("statusReport");

  // Put your code for the exercises here.
  button.addEventListener("click", () => {
    // document.getElementById("statusReport").innerHTML = "Houston, we have liftoff!";
    paragraph.innerHTML = "Houston, we have liftoff!";
  });
  missionAbort.addEventListener("mouseover", (event) => {
    // #missionAbort {
    //     background-color: Red
    // }
    missionAbort.style = "background-color: red";
  });
  missionAbort.addEventListener("mouseout", (event) => {
    missionAbort.style = "background-color: default";
    //missionAbort.style.backgroundColor = ""
  });
  missionAbort.addEventListener("click", function (event) {
    //confirmation window
    if (confirm("Are you sure you want to abort the mission?")) {
      paragraph.innerHTML = "Mission aborted! Space shuttle returning home";
    } 
    // else {
    //   paragraph.innerHTML = "The shuttle is still on the ground";
    // }
  });
}

window.addEventListener("load", init);
