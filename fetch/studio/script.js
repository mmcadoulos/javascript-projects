//TODO: Add Your Code Below
window.addEventListener("load", () => {
  fetch(
    "https://handlers.education.launchcode.org/static/astronauts.json"
  ).then((res) => {
    res.json().then((json) => {
      let container = document.getElementById("container");
      container.innerHTML += `<h2>Number of Astronauts: ${json.length}</h2>`;
      json.sort((a, b) => {
        return b.hoursInSpace - a.hoursInSpace;
      });
      for (let i = 0; i < json.length; i++) {
        if (json[i].active) {
          container.innerHTML += `<div class="astronaut">
            <div class="bio">
                <h3>${json[i].firstName} ${json[i].lastName}</h3>
                <ul>
                    <li>Hours in space: ${json[i].hoursInSpace}</li>
                    <li style="color:green">Active: ${json[i].active}</li>
                    <li>Skills: ${json[i].skills}</li>
                </ul>
            </div>
            <img class="avatar" src="${json[i].picture}">
            </div>`;
        } else {
          container.innerHTML += `<div class="astronaut">
          <div class="bio">
          <h3>${json[i].firstName} ${json[i].lastName}</h3>
          <ul>
          <li>Hours in space: ${json[i].hoursInSpace}</li>
          <li id="truth">Active: ${json[i].active}</li>
          <li>Skills: ${json[i].skills}</li>
          </ul>
          </div>
          <img class="avatar" src="${json[i].picture}">
          </div>`;
        }
      }
    });
  });
});
