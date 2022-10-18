

let first = 0;
let counter = 0;

function display(value) {
    if (counter == 0) {
        document.getElementById("oscreen").value += value;
    } else {
        document.getElementById("oscreen").value = "";
        document.getElementById("oscreen").value += value;
        counter = 0;
    }
}

function calculate() {

    var p = document.getElementById("oscreen").value;

    let newstr = "";
    for (let i = 0; i < p.length; i++) {

        if (p[i] == '×') {
            newstr = newstr + '*';
        }
        else if(p[i] == '÷'){
            newstr = newstr + '/';
        }
         else {
            newstr = newstr + p[i];
        }
    }

    var q = eval(newstr);
    console.log(q);
    document.getElementById("oscreen").value = q;
    counter++;

}

function clearScreen() {
    document.getElementById("oscreen").value = "";
    console.clear();
}

function clearWord() {
    output = document.getElementById("oscreen").value;
    output = output.slice(0, -1);
    document.getElementById("oscreen").value = output;
    console.log(output);

}
