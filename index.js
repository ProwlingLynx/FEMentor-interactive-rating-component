const options = document.getElementsByClassName("rating-select");
let selectedValue = '';
const form = document.getElementsByTagName("form")[0];
const button = document.getElementsByTagName("button")[0];

const resetAllOptions = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        element.className = "rating-select";
    }
};

const listenForClick = (e) => {
    e.preventDefault();
    resetAllOptions(options);
    const target = e.target;
    console.log(e.target.className);
    if (target.className === "rating-select") {
        target.className = "rating-select active";
        selectedValue = target.innerText;
        button.removeAttribute('disabled');
    }
};

const thankForSelection = (e) => {
    e.preventDefault();
    const target = e.target;
    if (selectedValue != '') {
        console.log("Thank you!")
    }
}

form.addEventListener("click", listenForClick);
button.addEventListener("click", thankForSelection);