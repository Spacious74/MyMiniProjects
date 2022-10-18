const element = document.getElementById("totalquestion");
let num = element.children.length;
console.log("Total childrens of id : " + num);
// element.childNodes[1].style.backgroundColor = "red"; it access 
// a particular element in multiple childs of a parent. 
// with index 1,3,5,7,9,--------

// let i;
// for(i=0;i<=9;i++){
//     let text = element.childNodes[(2*i)+1].textContent;
//     console.log(text);
// }

// ABOVE CODE WRITES THE CHILDREN ELEMENT'S CONTENT 


// var totalMarks = 0;


// function colornumber(){

//     if(document.getElementById("a11").checked == true){
//         element.childNodes[1].style.backgroundColor = "#8de28d";
//         totalMarks = totalMarks + 3;
//     }
//     else{
//         element.childNodes[1].style.backgroundColor = "red";
//     }
// }


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
        if(document.getElementById("a11").checked == true){
            element.childNodes[1].style.backgroundColor = "#8de28d";
            document.getElementById("que1").style.backgroundColor = "#8de28d"
            totalMarks = totalMarks + 3;
        }
        else {
            element.childNodes[1].style.backgroundColor = "#f1aaaa";
            document.getElementById("que1").style.backgroundColor = "#f1aaaa"
            document.getElementById("c11").style.color = "green";
            document.getElementById("c11").innerText = "Eknath Sindhey is correct";
        }
    }
    else{
        document.getElementById("que1").style.backgroundColor = "#acacac";
    }


    if (document.querySelector('input[name="answer2"]:checked')) {
        if(document.getElementById("a21").checked == true){
            element.childNodes[3].style.backgroundColor = "#8de28d";
            document.getElementById("que2").style.backgroundColor = "#8de28d"
            totalMarks = totalMarks + 3;
        }
        else {
            element.childNodes[3].style.backgroundColor = "#f1aaaa";
            document.getElementById("que2").style.backgroundColor = "#f1aaaa"
            document.getElementById("c21").style.color = "green";
            document.getElementById("c21").innerText = "Civil disobendience movement is correct";
        }
    }
    else{
        document.getElementById("que2").style.backgroundColor = "#acacac";
    }


    if (document.querySelector('input[name="answer3"]:checked')) {
        if(document.getElementById("a32").checked == true){
            element.childNodes[5].style.backgroundColor = "#8de28d";
            document.getElementById("que3").style.backgroundColor = "#8de28d";
            totalMarks = totalMarks + 3;
        }
        else {
            element.childNodes[5].style.backgroundColor = "#f1aaaa";
            document.getElementById("que3").style.backgroundColor = "#f1aaaa";
            document.getElementById("c32").style.color = "green";
            document.getElementById("c32").innerText = "Cosmology is correct";
        }
    }
    else{
        document.getElementById("que3").style.backgroundColor = "#acacac";
    }

    if (document.querySelector('input[name="answer4"]:checked')) {
        if(document.getElementById("a43").checked == true){
            element.childNodes[7].style.backgroundColor = "#8de28d";
            document.getElementById("que4").style.backgroundColor = "#8de28d"
            totalMarks = totalMarks + 3;
        }
        else {
            element.childNodes[7].style.backgroundColor = "#f1aaaa";
            document.getElementById("que4").style.backgroundColor = "#f1aaaa"
            document.getElementById("c43").style.color = "green";
            document.getElementById("c43").innerText = "Mount K2 is correct";
        }
    }
    else{
        document.getElementById("que4").style.backgroundColor = "#acacac";
    }

    if (document.querySelector('input[name="answer5"]:checked')) {
        if(document.getElementById("a53").checked == true){
            element.childNodes[9].style.backgroundColor = "#8de28d";
            document.getElementById("que5").style.backgroundColor = "#8de28d"
            totalMarks = totalMarks + 3;
        }
        else {
            element.childNodes[9].style.backgroundColor = "#f1aaaa";
            document.getElementById("que5").style.backgroundColor = "#f1aaaa";
            document.getElementById("c53").style.color = "green";
            document.getElementById("c53").innerText = "Jute is correct";
        }
    }
    else{
        document.getElementById("que5").style.backgroundColor = "#acacac";
    }

    if (document.querySelector('input[name="answer6"]:checked')) {
        if(document.getElementById("a64").checked == true){
            element.childNodes[11].style.backgroundColor = "#8de28d";
            document.getElementById("que6").style.backgroundColor = "#8de28d"
            totalMarks = totalMarks + 3;
        }
        else {
            element.childNodes[11].style.backgroundColor = "#f1aaaa";
            document.getElementById("que6").style.backgroundColor = "#f1aaaa";
            document.getElementById("c64").style.color = "green";
            document.getElementById("c64").innerText = "Constituent Assembly is correct";
        }
    }
    else{
        document.getElementById("que6").style.backgroundColor = "#acacac";
    }

    if (document.querySelector('input[name="answer7"]:checked')) {
        if(document.getElementById("a73").checked == true){
            element.childNodes[13].style.backgroundColor = "#8de28d";
            document.getElementById("que7").style.backgroundColor = "#8de28d"
            totalMarks = totalMarks + 3;
        }
        else {
            element.childNodes[13].style.backgroundColor = "#f1aaaa";
            document.getElementById("que7").style.backgroundColor = "#f1aaaa";
            document.getElementById("c73").style.color = "green";
            document.getElementById("c73").innerText = "Child Vaccination is correct";
        }
    }
    else{
        document.getElementById("que7").style.backgroundColor = "#acacac";
    }

    if (document.querySelector('input[name="answer8"]:checked')) {
        if(document.getElementById("a81").checked == true){
            element.childNodes[15].style.backgroundColor = "#8de28d";
            document.getElementById("que8").style.backgroundColor = "#8de28d"
            totalMarks = totalMarks + 3;
        }
        else {
            element.childNodes[15].style.backgroundColor = "#f1aaaa";
            document.getElementById("que8").style.backgroundColor = "#f1aaaa";
            document.getElementById("c81").style.color = "green";
            document.getElementById("c81").innerText = "Viking 1 is correct";
        }
    }
    else{
        document.getElementById("que8").style.backgroundColor = "#acacac";
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
            document.getElementById("c93").style.color = "green";
            document.getElementById("c93").innerText = "Japan is correct";
        }
    }
    else{
        document.getElementById("que9").style.backgroundColor = "#acacac";
    }

    if (document.querySelector('input[name="answer10"]:checked')) {
        if(document.getElementById("a101").checked == true){
            element.childNodes[19].style.backgroundColor = "#8de28d";
            document.getElementById("que10").style.backgroundColor = "#8de28d"
            totalMarks = totalMarks + 3;
        }
        else {
            element.childNodes[19].style.backgroundColor = "#f1aaaa";
            document.getElementById("que10").style.backgroundColor = "#f1aaaa"
            document.getElementById("c101").style.color = "green";
            document.getElementById("c101").innerText = "Table Tennis is correct";
        }
    }
    else{
        document.getElementById("que10").style.backgroundColor = "#acacac";
    }

    document.getElementById("result").style.display = "block";
    document.getElementById("result").innerHTML = "You Scored " + totalMarks + '/30 marks';
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