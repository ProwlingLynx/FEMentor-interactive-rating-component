// Selectors to avoid repeat querying.
const options = document.getElementsByClassName("rating-select");
const form = document.getElementsByTagName("form")[0];
const button = document.getElementsByTagName("button")[0];
const section = document.getElementsByTagName("section")[0];
const thankYouMessage = document.getElementsByClassName("you-selected")[0];

// User selection.
let selectedValue = "";

/*
The following functions use side effects to manipulate the DOM.
Definition order is specific to be referenced later.
*/

// resets the "radio" buttons
const resetAllOptions = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    element.className = "rating-select";
  }
};

// Sets second pages text value.
const setThankYou = (val) => {
  thankYouMessage.innerText = `You selected ${val} out of 5`;
};

/*
    Handles user clicks on "radio" buttons through event
    delegation. See event bubbling.

    Note: if multiple targets of the same value are clicked via
    via accidental layering or bubbling, potential bugs might ensue.
*/
const handleRadioClick = (e) => {
  e.preventDefault();
  resetAllOptions(options);
  const target = e.target;
  if (target.className === "rating-select") {
    target.className = "rating-select active";
    selectedValue = target.innerText;
  }
};

/*
    Transitions view only if a selection has been made.
    Potential improvements should include feedback when
    user does not make a selection first.

    Note: requires that hideAll and showTarget were defined
    earlier. Using function keyword would remove this concern via hoisting
    instead of using function expressions. Would prefer to keep
    global scope clear.
*/

const thankForSelection = (e) => {
  e.preventDefault();
  const target = e.target;
  if (selectedValue != "") {
    setThankYou(selectedValue);
    hideAll();
    showTarget("thank-you-container");
  }
};

// Clears DOM by hiding all elements
// Currently only two section elements are used in this project.

const hideAll = () => {
  const allViews = document.getElementsByTagName("section");
  for (let i = 0; i < allViews.length; i++) {
    const element = allViews[i];
    element.className = "hidden";
  }
};

// Shows the thank you view. Could simplify by removing param.

const showTarget = (target) => {
  const element = document.getElementById(target);
  console.log("From showTarget: \n", element);
  element.classList.remove("hidden");
};

form.addEventListener("click", handleRadioClick);
button.addEventListener("click", thankForSelection);
