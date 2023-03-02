const colombianPeso = 4786.93;
const euro = 0.93;
const canadianDollar = 1.34;
const japaneseYen = 131.32;
const mexicanPeso = 18.12;
const turkishLira = 18.88;
const indianRupee = 82.42;
const ukPoundSterling = 0.83;
const australianDollar = 1.48;
const chineseYuan = 6.87;
const russianRuble = 75.26;
const argentinePeso = 197.55;
const bolivianBolivano = 6.91;
const brazilianReal = 5.18;
const chileanPeso = 811.07;
const paraguayanGuarani = 7282.11;
const peruvianSol = 3.79;
const uruguayanPeso = 39.05;
const venezuelanBolivar = 24.36;

function calculate() {
    var selector = document.getElementById("selector");
    var value = selector.value;
    var conversionRate = 0;
    var currencyHeaders = document.getElementsByClassName("foreignCurrencyHeader");
    var currency;
    switch (value) {
        case "":
            alert("Please select a country first!");
            break;
        case "euro":
            conversionRate = euro;
            currency = "Euros";
            break;
        case "colombia":
            conversionRate = colombianPeso;
            currency = "Colombian Pesos";
            break;
        case "japan":
            conversionRate = japaneseYen;
            currency = "Japanese Yen";
            break;
        case "mexico":
            conversionRate = mexicanPeso;
            currency = "Mexican Pesos";
            break;
        case "australia":
            conversionRate = australianDollar;
            currency = "Australian Dollars";
            break;
        case "turkey":
            conversionRate = turkishLira;
            currency = "Turkish Lira";
            break;
        case "uk":
            conversionRate = ukPoundSterling;
            currency = "Pounds";
            break;
        case "india":
            conversionRate = indianRupee;
            currency = "Indian Rupees";
            break;
        case "china":
            conversionRate = chineseYuan;
            currency = "Chinese Yuan";
            break;
        case "canada":
            conversionRate = canadianDollar;
            currency = "Canadian Dollars";
            break;
        case "russia":
            conversionRate = russianRuble;
            currency = "Russian Ruble";
            break;
        case "argentina":
            conversionRate = argentinePeso;
            currency = "Argentine Pesos";
            break;
        case "bolivia":
            conversionRate = bolivianBolivano;
            currency = "Bolivanos";
            break;
        case "brazil":
            conversionRate = brazilianReal;
            currency = "Brazilian Real";
            break;
        case "chile":
            conversionRate = chileanPeso;
            currency = "Chilean Pesos";
            break;
        case "paraguay":
            conversionRate = paraguayanGuarani;
            currency = "Guarani";
            break;
        case "peru":
            conversionRate = peruvianSol;
            currency = "Sol";
            break;
        case "uruguay":
            conversionRate = uruguayanPeso;
            currency = "Uruguayan Pesos";
            break;
        case "venezuela":
            conversionRate = venezuelanBolivar;
            currency = "Bolivars";        
            break;
    } // switch
    var num;
    if (conversionRate!=0) {
        document.getElementById("planeOut").innerHTML = (document.getElementById("planeIn").value * conversionRate).toLocaleString("en-US");
        document.getElementById("busOut").innerHTML = (document.getElementById("busIn").value * conversionRate).toLocaleString("en-US");
        document.getElementById("trainOut").innerHTML = (document.getElementById("trainIn").value * conversionRate).toLocaleString("en-US");
        document.getElementById("rentalOut").innerHTML = (document.getElementById("rentalIn").value * conversionRate).toLocaleString("en-US");
        document.getElementById("gasOut").innerHTML = (document.getElementById("gasIn").value * conversionRate).toLocaleString("en-US");
        document.getElementById("rideshareOut").innerHTML = (document.getElementById("rideshareIn").value * conversionRate).toLocaleString("en-US");
        document.getElementById("breakfastOut").innerHTML = (document.getElementById("breakfastIn").value * conversionRate).toLocaleString("en-US");
        document.getElementById("lunchOut").innerHTML = (document.getElementById("lunchIn").value * conversionRate).toLocaleString("en-US");
        document.getElementById("dinnerOut").innerHTML = (document.getElementById("dinnerIn").value * conversionRate).toLocaleString("en-US");
        document.getElementById("snacksOut").innerHTML = (document.getElementById("snacksIn").value * conversionRate).toLocaleString("en-US");
        document.getElementById("drinksOut").innerHTML = (document.getElementById("drinksIn").value * conversionRate).toLocaleString("en-US");
        for (i=0; i<currencyHeaders.length; i++) {
            currencyHeaders[i].innerHTML = currency;
        }
    } // if
}