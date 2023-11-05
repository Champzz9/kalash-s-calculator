// This function clears all the values
function clearScreen() {
    document.getElementById("result").value = "";
}
 
// This function displays the values
function display(value) {
    document.getElementById("result").value += value;
}
 
// This function evaluates the expression and returns the result
function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
}
function back()
{
    var p = document.getElementById("result").value;
    p=p.slice(0,-1);
    document.getElementById("result").value=p;
}
function perc()
{
    document.getElementById("result").value/=100;
}