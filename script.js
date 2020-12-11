const screen = document.querySelector('textarea');
var placeANumber = false;
var showResult = false;

screen.value = '';

function cleanScreen() {

    placeANumber = false;
    showResult - false;
    screen.value = '';    
};

function operator(key) {
    if (placeANumber) {

        screen.value += key;
        placeANumber = false;
        showResult = false;
    }
};

function placeNumber(key) {
    if(showResult) {

        screen.value = key;
        
        showResult = false;
        placeANumber = true;
    } else {

        screen.value += key;
        placeANumber = true;
    }
};

function result() {
    screen.value = math.evaluate(calc.txt.value);
    showResult = true;
};