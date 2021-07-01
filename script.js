// Loading weather ALERTS

function loadingB() {
    alert("Loading weather report for Burbank, CA")
}

function loadingC() {
    alert("Loading weather report for Chicago, IL")
}

function loadingD() {
    alert("Loading weather report for Dallas, TX")
}

// Cookie footer delete on accept

var cookieDiv = document.querySelector("#footer-div");

function accept() {
    cookieDiv.remove();
}

// Convert temp from C to F

function convert(element) {
    console.log(element.value);
    for (let i = 1; i < 9; i++) {
        var tempSpan = document.querySelector("#temp" + i);
        var tempVal = parseInt(tempSpan.innerText);
        if (element.value == "°C") {
            tempSpan.innerText = (f2c(tempVal));
        } else {
            tempSpan.innerText = (c2f(tempVal));
        }
    }
}

function c2f(temp) {
    return Math.round (9 / 5 * temp + 32);
}

function f2c(temp) {
    return Math.round ((temp - 32) * 5 / 9);
}