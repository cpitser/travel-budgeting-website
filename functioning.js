const colombianPeso = 4786.93;
const euro = 0.93;
const canadianDollar = 1.34;
const japaneseYen = 131.32;

function calculate() {
    var selector = document.getElementById("selector");
    var selection = selector.selectedIndex;
    alert(selection);
    var converstionRate;
    if (selection == 3) {
        converstionRate = colombianPeso;
    }
    var num;
    num = document.getElementById("planeIn").value;
    document.getElementById("planeOut").innerHTML = num * converstionRate;
}