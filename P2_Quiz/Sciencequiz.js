const element = document.getElementById("totalquestion");
let num = element.children.length;
console.log("Total childrens of id : " + num);

function checkfun(n) {
    if (document.querySelector('input[name="answer1"]:checked') && n == 1) {
        var radio = document.querySelector('input[name="answer1"]:checked');
        radio.checked = false;
    }
    if (document.querySelector('input[name="answer2"]:checked') && n == 2) {
        var radio = document.querySelector('input[name="answer2"]:checked');
        radio.checked = false;
    }
    if (document.querySelector('input[name="answer3"]:checked') && n == 3) {
        var radio = document.querySelector('input[name="answer3"]:checked');
        radio.checked = false;
    }
    if (document.querySelector('input[name="answer4"]:checked') && n == 4) {
        var radio = document.querySelector('input[name="answer4"]:checked');
        radio.checked = false;
    }
    if (document.querySelector('input[name="answer5"]:checked') && n == 5) {
        var radio = document.querySelector('input[name="answer5"]:checked');
        radio.checked = false;
    }
    if (document.querySelector('input[name="answer6"]:checked') && n == 6) {
        var radio = document.querySelector('input[name="answer6"]:checked');
        radio.checked = false;
    }
    if (document.querySelector('input[name="answer7"]:checked') && n == 7) {
        var radio = document.querySelector('input[name="answer7"]:checked');
        radio.checked = false;
    }
    if (document.querySelector('input[name="answer8"]:checked') && n == 8) {
        var radio = document.querySelector('input[name="answer8"]:checked');
        radio.checked = false;
    }
    if (document.querySelector('input[name="answer9"]:checked') && n == 9) {
        var radio = document.querySelector('input[name="answer9"]:checked');
        radio.checked = false;
    }
    if (document.querySelector('input[name="answer10"]:checked') && n == 10) {
        var radio = document.querySelector('input[name="answer10"]:checked');
        radio.checked = false;
    }
}


function resultanimate(){
    if(navigator.onLine){
        document.getElementById("iconanimation").style.display = "block";    
    }
    else{
        document.getElementById("offanimate").style.display = "block";
    }
    document.getElementById("questionpage").style.display = "none";
    document.getElementById("loadtext").style.display = "block";
    setTimeout(calculateResult, 1000);
}


var totalMarks = 0;
function calculateResult() {


    document.getElementById("questionpage").style.display = "flex";
    document.getElementById("iconanimation").style.display = "none";
    document.getElementById("loadtext").style.display = "none";
    document.getElementById("offanimate").style.display = "none";
    document.getElementById("sidepage").style.display = "flex";

    if (document.querySelector('input[name="answer1"]:checked')) {
        if(document.getElementById("a12").checked == true){
            element.childNodes[1].style.backgroundColor = "#8de28d";
            document.getElementById("que1").style.backgroundColor = "#8de28d"
            totalMarks = totalMarks + 3;
        }
        else {
            element.childNodes[1].style.backgroundColor = "#f1aaaa";
            document.getElementById("que1").style.backgroundColor = "#f1aaaa";
            document.getElementById("sc12").style.color = "green";
            document.getElementById("sc12").innerText = "Inertia of Motion is correct";
        }
    }
    else{
        document.getElementById("que1").style.backgroundColor = "#cacaca";
    }


    if (document.querySelector('input[name="answer2"]:checked')) {
        if(document.getElementById("a23").checked == true){
            element.childNodes[3].style.backgroundColor = "#8de28d";
            document.getElementById("que2").style.backgroundColor = "#8de28d"
            totalMarks = totalMarks + 3;
        }
        else {
            element.childNodes[3].style.backgroundColor = "#f1aaaa";
            document.getElementById("que2").style.backgroundColor = "#f1aaaa";
            document.getElementById("sc23").style.color = "green";
            document.getElementById("sc23").innerText = "Kilowatt is correct";
        }
    }
    else{
        document.getElementById("que2").style.backgroundColor = "#cacaca";
    }


    if (document.querySelector('input[name="answer3"]:checked')) {
        if(document.getElementById("a34").checked == true){
            element.childNodes[5].style.backgroundColor = "#8de28d";
            document.getElementById("que3").style.backgroundColor = "#8de28d";
            totalMarks = totalMarks + 3;
        }
        else {
            element.childNodes[5].style.backgroundColor = "#f1aaaa";
            document.getElementById("que3").style.backgroundColor = "#f1aaaa";
            document.getElementById("sc34").style.color = "green";
            document.getElementById("sc34").innerText = "Mercury, Venus, Earth, Mars is correct";
        }
    }
    else{
        document.getElementById("que3").style.backgroundColor = "#cacaca";
    }

    if (document.querySelector('input[name="answer4"]:checked')) {
        if(document.getElementById("a41").checked == true){
            element.childNodes[7].style.backgroundColor = "#8de28d";
            document.getElementById("que4").style.backgroundColor = "#8de28d"
            totalMarks = totalMarks + 3;
        }
        else {
            element.childNodes[7].style.backgroundColor = "#f1aaaa";
            document.getElementById("que4").style.backgroundColor = "#f1aaaa"
            document.getElementById("sc41").style.color = "green";
            document.getElementById("sc41").innerText = "32⁰F is correct";
        }
    }
    else{
        document.getElementById("que4").style.backgroundColor = "#cacaca";
    }

    if (document.querySelector('input[name="answer5"]:checked')) {
        if(document.getElementById("a52").checked == true){
            element.childNodes[9].style.backgroundColor = "#8de28d";
            document.getElementById("que5").style.backgroundColor = "#8de28d"
            totalMarks = totalMarks + 3;
        }
        else {
            element.childNodes[9].style.backgroundColor = "#f1aaaa";
            document.getElementById("que5").style.backgroundColor = "#f1aaaa"
            document.getElementById("sc52").style.color = "green";
            document.getElementById("sc52").innerText = "its amplitude is correct";
        }
    }
    else{
        document.getElementById("que5").style.backgroundColor = "#cacaca";
    }

    if (document.querySelector('input[name="answer6"]:checked')) {
        if(document.getElementById("a61").checked == true){
            element.childNodes[11].style.backgroundColor = "#8de28d";
            document.getElementById("que6").style.backgroundColor = "#8de28d"
            totalMarks = totalMarks + 3;
        }
        else {
            element.childNodes[11].style.backgroundColor = "#f1aaaa";
            document.getElementById("que6").style.backgroundColor = "#f1aaaa"
            document.getElementById("sc61").style.color = "green";
            document.getElementById("sc61").innerText = "Lumens is correct";
        }
    }
    else{
        document.getElementById("que6").style.backgroundColor = "#cacaca";
    }

    if (document.querySelector('input[name="answer7"]:checked')) {
        if(document.getElementById("a71").checked == true){
            element.childNodes[13].style.backgroundColor = "#8de28d";
            document.getElementById("que7").style.backgroundColor = "#8de28d"
            totalMarks = totalMarks + 3;
        }
        else {
            element.childNodes[13].style.backgroundColor = "#f1aaaa";
            document.getElementById("que7").style.backgroundColor = "#f1aaaa"
            document.getElementById("sc71").style.color = "green";
            document.getElementById("sc71").innerText = "Weaken it is correct";
        }
    }
    else{
        document.getElementById("que7").style.backgroundColor = "#cacaca";
    }

    if (document.querySelector('input[name="answer8"]:checked')) {
        if(document.getElementById("a84").checked == true){
            element.childNodes[15].style.backgroundColor = "#8de28d";
            document.getElementById("que8").style.backgroundColor = "#8de28d"
            totalMarks = totalMarks + 3;
        }
        else {
            element.childNodes[15].style.backgroundColor = "#f1aaaa";
            document.getElementById("que8").style.backgroundColor = "#f1aaaa";
            document.getElementById("sc84").style.color = "green";
            document.getElementById("sc84").innerText = "Violet is correct";
        }
    }
    else{
        document.getElementById("que8").style.backgroundColor = "#cacaca";
    }

    if (document.querySelector('input[name="answer9"]:checked')) {
        if(document.getElementById("a93").checked == true){
            element.childNodes[17].style.backgroundColor = "#8de28d";
            document.getElementById("que9").style.backgroundColor = "#8de28d"
            totalMarks = totalMarks + 3;
        }
        else {
            element.childNodes[17].style.backgroundColor = "#f1aaaa";
            document.getElementById("que9").style.backgroundColor = "#f1aaaa"
            document.getElementById("sc93").style.color = "green";
            document.getElementById("sc93").innerText = "H₂SO₃ is correct";
        }
    }
    else{
        document.getElementById("que9").style.backgroundColor = "#cacaca";
    }

    if (document.querySelector('input[name="answer10"]:checked')) {
        if(document.getElementById("a104").checked == true){
            element.childNodes[19].style.backgroundColor = "#8de28d";
            document.getElementById("que10").style.backgroundColor = "#8de28d"
            totalMarks = totalMarks + 3;
        }
        else {
            element.childNodes[19].style.backgroundColor = "#f1aaaa";
            document.getElementById("que10").style.backgroundColor = "#f1aaaa"
            document.getElementById("sc104").style.color = "green";
            document.getElementById("sc104").innerText = "20 is correct";
        
        }
    }
    else{
        document.getElementById("que10").style.backgroundColor = "#cacaca";
    }

    document.getElementById("result").style.display = "block";
    document.getElementById("result").innerHTML = "You Scored " + totalMarks + ' marks';
    document.getElementById("submitresultbtn").style.display = "none";   
    document.getElementById("btn1").style.display = "none";   
    document.getElementById("btn2").style.display = "none";   
    document.getElementById("btn3").style.display = "none";   
    document.getElementById("btn4").style.display = "none";   
    document.getElementById("btn5").style.display = "none";   
    document.getElementById("btn6").style.display = "none";   
    document.getElementById("btn7").style.display = "none";   
    document.getElementById("btn8").style.display = "none";   
    document.getElementById("btn9").style.display = "none";   
    document.getElementById("btn10").style.display = "none";   
}