const birthYear = document.getElementById("birthYear");
const birthMonth = document.getElementById("birthMonth");
const birthDate = document.getElementById("birthDate");

const initBirthMonth = function () {
    initSelect(birthMonth, 1, 12);
};


function resetBirthDate() {
    const year = birthYear.value;
    const month = birthMonth.value;
    birthDate.innerText="";
    initBirthDay(birthDate,year,month)
}

function initBirthDay(selectElement,year,month) {
    const date = new Date(year, month, 0);
    const maxDate = date.getDate();
    initSelect(selectElement,1,maxDate);
}

function initBirthYear(minAge, maxAge) {
    const today = new Date();
    const maxYear = today.getFullYear() - minAge;
    const minYear = today.getFullYear() - maxAge;
    initSelect(birthYear,minYear,maxYear);
}

function initSelect(selectElement, begin, end) {
    for (var i = begin; i <= end; i++) {
        const element = document.createElement("option");
        element.text = i;
        element.value= i;
        selectElement.appendChild(element);
    }
}

initBirthYear(15,50);
initBirthMonth();
resetBirthDate();

birthYear.onchange = function () {
    resetBirthDate();
}
birthMonth.onchange = function () {
    resetBirthDate();
}


const cls = document.getElementById("cls");
const all = document.getElementById("all");
const rev = document.getElementById("rev");

rev.onclick = function() {
    setCheckBoxChecked("hobby");
}

all.onclick = function() {
    setCheckBoxChecked("hobby",true);
}


cls.onclick = function() {
    setCheckBoxChecked("hobby",false);
}

function setCheckBoxChecked(elementName, value) {
    const elements = document.getElementsByName(elementName);
    for (var i = 0; i < elements.length; i++) {
        if (value === undefined) {
            elements[i].checked = !elements[i].checked
        } else {
            elements[i].checked = value;
        }
    }
}