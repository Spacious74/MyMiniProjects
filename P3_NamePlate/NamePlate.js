function takevalue(){
    let y = document.getElementById("text").value
    let i;
    var color = document.getElementById("colorplate").value
    console.log(color);
    for( i = 0; i<=y.length-1; i++){
        const btn = document.createElement("span");
        btn.innerHTML = y[i];
        btn.style.backgroundColor = color;
        btn.style.boxShadow = ' 5px 5px 1px color, 10px 10px 15px #0000005d '
        document.getElementById("addbtn").appendChild(btn);
    }
    var cal = '₹ ' + y.length * 10;
    document.getElementById("price").value = cal;
}
function clearNamePlate(){
    location.reload();
}



