//Code Your Solution Below
function init() {
  let form = document.querySelector("form");
  form.addEventListener("submit", (event) => {
    let nameInput = document.querySelector("input[name=testName]");
    let dateInput = document.querySelector("input[name=testDate]");
    let rocketTypeInput = document.querySelector("input[name=rocketType]");
    let boosterInput = document.querySelector("input[name=boosterCount]");
    let windInput = document.querySelector("input[name=windRating]");
    let serversInput = document.querySelector("input[name=productionServers]");
    console.log(windInput.value)
    if (
      nameInput.value === "" ||
      dateInput.value === "" ||
      /*rocketTypeInput.value === '' ||*/
      boosterInput.value === '' ||
      windInput.value != 25||
      serversInput.value === ""
    ) {
      alert("All fields are required!!");
      event.preventDefault();
    }

    console.log("all systems go!");
  });
}

window.addEventListener("load", init);
