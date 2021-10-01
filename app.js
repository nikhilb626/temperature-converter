let celsius=document.getElementById('celsius');
let fahrenheit=document.getElementById('fahrenheit');

function celToFar(){
    let output=(parseFloat(celsius.value)*9/5)+32;
    fahrenheit.value=parseFloat(output.toFixed(2));
    var x = document.getElementsByTagName("BODY")[0];
    x.style.backgroundColor = "rgb("+Math.round(Math.random()*255)+","+Math.round(Math.random()*255)+","+Math.round(Math.random()*255)+")";
}

function farToCel(){
    let output=(parseFloat(fahrenheit.value)-32)*5/9;
    celsius.value=parseFloat(output.toFixed(2));
    var x = document.getElementsByTagName("BODY")[0];
    x.style.backgroundColor = "rgb("+Math.round(Math.random()*255)+","+Math.round(Math.random()*255)+","+Math.round(Math.random()*255)+")";
}