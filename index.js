const options = document.getElementsByClassName("rating-select");
const form = document.getElementsByTagName("form")[0];
const button = document.getElementsByTagName("button")[0];
const section = document.getElementsByTagName("section")[0];
const thankYouMessage = document.getElementsByClassName("you-selected")[0];

let selectedValue = '';

const resetAllOptions = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        element.className = "rating-select";
    }
};

const setThankYou = (val) => {
    thankYouMessage.innerText = `You selected ${val} out of 5`
}

const listenForClick = (e) => {
    e.preventDefault();
    resetAllOptions(options);
    const target = e.target;
    console.log(e.target.className);
    if (target.className === "rating-select") {
        target.className = "rating-select active";
        selectedValue = target.innerText;
    }
};

const thankForSelection = (e) => {
    e.preventDefault();
    const target = e.target;
    console.log(target);
    console.log(`this is value: ${selectedValue}`);
    if (selectedValue != '') {
        setThankYou(selectedValue);
        console.log("Thank you!")
        hideAll();
        showTarget("thank-you-container");
    }
}

const hideAll = () => {
    const allViews = document.getElementsByTagName("section");
    for (let i = 0; i < allViews.length; i++) {
        const element = allViews[i];
        element.className = "hidden";
    }
};

const showTarget = (target) => {
    const element = document.getElementById(target);
    console.log("From showTarget: \n", element);
    element.classList.remove("hidden");
}

form.addEventListener("click", listenForClick);
button.addEventListener("click", thankForSelection);