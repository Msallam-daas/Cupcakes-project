$(document).ready(show_cupcakes);

var cup_cakes = [
  { name: "Chocolate", calories: "high", weight: "200gm" },
  { name: "Carrot", calories: "medium", weight: "150gm" },
  { name: "Banana", calories: "high", weight: "200gm" },
  { name: "Strawberry", calories: "low", weight: "160gm" },
  { name: "Peanut", calories: "medium", weight: "200gm" },
];

let cupcakeTable = document.getElementById("cupcake-table");
function show_cupcakes() {
  //write code that shows the cupcakes in the table as per the instructions
  for (let i = 0; i < cup_cakes.length; i++) {
    let tr1 = document.createElement("tr");
    let td1 = document.createElement("td");
    td1.innerHTML = cup_cakes[i].name;
    let td2 = document.createElement("td");
    td2.innerHTML = cup_cakes[i].calories;
    let td3 = document.createElement("td");
    td3.innerHTML = cup_cakes[i].weight;
    tr1.append(td1);
    tr1.append(td2);
    tr1.append(td3);
    cupcakeTable.append(tr1);

    if (cup_cakes[i].calories === "high") {
      td2.style.backgroundColor = "#fe0000";
    } else if (cup_cakes[i].calories === "medium") {
      td2.style.backgroundColor = "#ffa600";
    } else td2.style.backgroundColor = "#93ee91";
  }
}

let username = document.querySelector("#customerName");
let selectType = document.querySelector("#type");
let selectDeliveryTime = document.querySelector("#delivery-time");
let selectAllergies = document.querySelector("#allergies");
let note1 = document.querySelector(".note1");
let note2 = document.querySelector(".note2");
let note3 = document.querySelector(".note3");
let note4 = document.querySelector(".note4");

let customerForm = document.querySelector(".customerForm");
customerForm.addEventListener("submit", function validate(e) {
  //write code that validates the form
  e.preventDefault();
  if (username.value.length >= 5 && username.value.length <= 16) {
    note1.innerHTML = "Okay";
    note1.style.color = "#93ee91";
    username.style.borderColor = "#93ee91";
    localStorage.setItem("user", JSON.stringify(username.value));
  } else {
    note1.innerHTML = "The name must be between 5 and 16 characters long";
    note1.style.color = "#fe0000";
    username.style.borderColor = "#fe0000";
  }
  if (selectType.value === "none") {
    note2.innerHTML = "None is not accepted";
    note2.style.color = "#fe0000";
    selectType.style.borderColor = "#fe0000";
  } else {
    note2.innerHTML = "Okay";
    note2.style.color = "#93ee91";
    selectType.style.borderColor = "#93ee91";
  }
  if (selectDeliveryTime.value === "none") {
    note3.innerHTML = "None is not accepted";
    note3.style.color = "#fe0000";
    selectDeliveryTime.style.borderColor = "#fe0000";
  } else {
    note3.innerHTML = "Okay";
    note3.style.color = "#93ee91";
    selectDeliveryTime.style.borderColor = "#93ee91";
  }
  if (
    selectDeliveryTime.value === "4:00pm" &&
    selectType.value === "chocolate"
  ) {
    note3.innerHTML =
      "Unfortunately Chocolate cupcakes cannot be delivered at 4:00pm";
    note3.style.color = "#fe0000";
    selectDeliveryTime.style.borderColor = "#fe0000";
  }
  if (
    selectAllergies.value === "dairy-free" &&
    selectType.value === "chocolate"
  ) {
    note4.innerHTML = "This type of cake is not dairy-free";
    note4.style.color = "#fe0000";
    selectAllergies.style.borderColor = "#fe0000";
  } else if (
    selectAllergies.value === "nut-free" &&
    selectType.value === "pecan"
  ) {
    note4.innerHTML = "This type of cake is not nut-free";
    note4.style.color = "#fe0000";
    selectAllergies.style.borderColor = "#fe0000";
  } else {
    note4.innerHTML = "Okay";
    note4.style.color = "#93ee91";
    selectAllergies.style.borderColor = "#93ee91";
  }
});

function show_storage() {
  //write code that shows the name from local storage
  let customerName = JSON.parse(localStorage.getItem("user"));
  document.getElementById("welcome").innerHTML = `Welcome ${customerName}`;
}
