// Write your JavaScript code here.
// function checkValidPosition(top, left) {
//   let rightBoundary = 550; //these will change bsaed on how the browser renders
//   let leftBoundary = -20;
//   let bottomBoundary = 245;
//   let topBoundary = -5;
//   if (
//     top < topBoundary ||
//     top > bottomBoundary ||
//     left < leftBoundary ||
//     left > rightBoundary
//   ) {
//     return false;
//   } else {
//     return true;
//   }
// }

function init() {
  const takeoff = document.getElementById("takeoff");
  const landing = document.getElementById("landing");
  const missionAbort = document.getElementById("missionAbort");
  const left = document.getElementById("left");
  const right = document.getElementById("right");
  const up = document.getElementById("up");
  const down = document.getElementById("down");
  const rocket = document.getElementById("rocket");
  const rocketImg = document.getElementById("rocket");

  rocketImg.style.position = "absolute";
  let rocketImgTop = 245;
  let rocketImgLeft = 275;
  rocketImg.style.top = rocketImgTop + "px";
  rocketImg.style.left = rocketImgLeft + "px";

  takeoff.addEventListener("click", () => {
    let confirmation = window.confirm(
      "Confirm that the shuttle is ready for takeoff."
    );
    if (confirmation) {
      document.getElementById("flightStatus").innerHTML = "Shuttle in flight.";
      document.getElementById("shuttleBackground").style.backgroundColor =
        "blue";
      document.getElementById("spaceShuttleHeight").innerHTML = 10000;
    }
  });

  landing.addEventListener("click", () => {
    window.alert("The shuttle is landing. Landing gear engaged.");
    document.getElementById("flightStatus").innerHTML =
      "The shuttle has landed.";
    document.getElementById("shuttleBackground").style.backgroundColor =
      "green";
    document.getElementById("spaceShuttleHeight").innerHTML = 0;
    rocketImgTop = 245;
    rocketImgLeft = 275;
    rocketImg.style.top = rocketImgTop + "px";
    rocketImg.style.left = rocketImgLeft + "px";
  });

  missionAbort.addEventListener("click", () => {
    let confirmation = window.confirm(
      "Confirm that you want to abort the mission."
    );
    if (confirmation) {
      document.getElementById("flightStatus").innerHTML = "Mission aborted.";
      document.getElementById("shuttleBackground").style.backgroundColor =
        "green";
      document.getElementById("spaceShuttleHeight").innerHTML = 0;
      rocketImgTop = 245;
      rocketImgLeft = 275;
      rocketImg.style.top = rocketImgTop + "px";
      rocketImg.style.left = rocketImgLeft + "px";
    }
  });

  up.addEventListener("click", () => {
    rocketImg.style.top = (rocketImgTop -= 10) + "px";
    document.getElementById("spaceShuttleHeight").innerHTML =
      Number(document.getElementById("spaceShuttleHeight").innerHTML) + 10000;
    // // Trevor's code
      // rocketImgTop -= 10;
    // if (checkValidPosition(rocketImgTop, rocketImgLeft)) {
    //   rocketImg.style.top = rocketImgTop + "px";
    //   rocketHeight += 10000;
    //   shuttleHeightText.innerHTML = shuttleHeight;
    // } else {
    //   shuttleImgTop += 10;
    // }  
});

  down.addEventListener("click", () => {
    rocketImg.style.top = (rocketImgTop += 10) + "px";
    document.getElementById("spaceShuttleHeight").innerHTML =
      Number(document.getElementById("spaceShuttleHeight").innerHTML) - 10000;
    // // Trevor's code
    //   shuttleImgTop += 10;
    //   if (checkValidPosition(shuttleImgTop, shuttleImgLeft)) {
    //     shuttleImg.style.top = shuttleImgTop + "px";
    //     shuttleHeight -= 10000;
    //     shuttleHeightText.innerHTML = shuttleHeight;
    //   } else {
    //     shuttleImgTop -= 10;
    //   }
    });

  left.addEventListener("click", () => {
    rocketImg.style.left = (rocketImgLeft -= 10) + "px";
    // // Trevor's code
    // shuttleImgLeft -= 10;
    // if (checkValidPosition(shuttleImgTop, shuttleImgLeft) === true) {
    //   shuttleImg.style.left = shuttleImgLeft + "px";
    // } else {
    //   shuttleImgLeft += 10;
    // }
  });

  right.addEventListener("click", () => {
    rocketImg.style.left = (rocketImgLeft += 10) + "px";
    // // Trevor's code
    // shuttleImgLeft += 10;
    // if (checkValidPosition(shuttleImgTop, shuttleImgLeft)) {
    //   shuttleImg.style.left = shuttleImgLeft + "px";
    // } else {
    //   shuttleImgLeft -= 10;
    // }
  });
}
// Remember to pay attention to page loading!
window.addEventListener("load", init);
